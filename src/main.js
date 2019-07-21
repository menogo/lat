import 'weui'
import Vue from 'vue'
import weui from 'weui.js'

import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/utils/http'
import * as api from './api/index'
const FastClick = require('fastclick')

Vue.config.productionTip = false

// 去除移动端点击延迟
FastClick.attach(document.body)

// 基于Axios封装的请求
Vue.prototype.$http = http
Vue.prototype.$get = http.$get
Vue.prototype.$post = http.$post

// 注入全局API endpoint
Vue.prototype.API = api

// 全局注入 weui.js
Vue.prototype.$weui = weui

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
