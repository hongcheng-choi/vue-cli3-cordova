import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'
import FastClick from 'fastclick'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import MintUI from 'mint-ui'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'mint-ui/lib/style.css'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.prototype.$http=axios

Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(Vant)
require('es6-promise').polyfill()   //vue 支持promise语法

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
