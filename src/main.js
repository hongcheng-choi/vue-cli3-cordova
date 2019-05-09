import Vue from "vue"
import Vuex from 'vuex'
import FastClick from 'fastclick'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
FastClick.attach(document.body)

Vue.use(MintUI)
Vue.use(Vuex)
require('es6-promise').polyfill()   //vue 支持promise语法

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
