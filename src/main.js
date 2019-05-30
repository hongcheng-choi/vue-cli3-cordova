import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'
import FastClick from 'fastclick'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import MintUI from 'mint-ui'
import Vant from 'vant';
import VueCordova from 'vue-cordova'
import 'vant/lib/index.css';
import 'mint-ui/lib/style.css'
import '@/assets/css/reset.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.prototype.$http=axios

Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(Vant)
Vue.use(VueCordova)
require('es6-promise').polyfill()   //vue 支持promise语法

if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
//测试的
Vue.cordova.on('deviceready', () => {
  console.log('Cordova : device is ready !');
  console.log('Vue.cordova :', Vue.cordova);
});


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
