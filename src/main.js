import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/icons'
import '@/assets/styles/index.scss'
/* 
 * 设置为 false 以阻止 vue 在启动时生成生产提示:
 * You are running Vue in development mode.
 * Make sure to turn on production mode when deploying for production.
 * See more tips at https://vuejs.org/guide/deployment.html
 */
Vue.config.productionTip = false

import http from './api' // 导入api接口

Vue.prototype.$http = http; // 将api挂载到vue的原型上

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  console.log("to:", to)
  if(from.path === "/login") {
    store.commit("SET_CURINDEX", "home");
  }
  // var fullPath = to.fullPath;
  if (to.matched.length === 0) {
    next('/404')
  }
  next();
  store.commit("SET_CURINDEX", to.name);
})
// router.beforeEach((to, from, next) => {
//   console.log("to:", to)
//   new Promise((resolve, reject) => {
//     // ...other codes
//   }).then(res => {
//     if (!to.matched.length) {
//       next('/404')
//       return
//     }
//     if (res) {
//       next(res)
//     } else {
//       next()
//     }
//   }).catch(err => {
//     new Error(err)
//     next(false)
//   })
// })


  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')