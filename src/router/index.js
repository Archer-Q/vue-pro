import Vue from 'vue'
import VueRouter from 'vue-router'
// import { base } from './base'
import { menu } from './menulist'
import { market } from './market'
var Layout = (resolve) => require(['@/base/layout/index.vue'], resolve)
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    id: '0001',
    component: (resolve) => require(['@/base/Login/index'], resolve),
    name: 'login',
    meta: {title: "登录页",icon: ""}
  },
  {
    path: '/',
    component: Layout,
    name: 'index',
    redirect: '/home',
    children: [
      // ...base,
      ...menu,
      {
        path: '/market',
        id: '1111',
        component: (resolve) => require(['@/views/market/index'], resolve),
        name: 'market',
        meta: {title: "应用商城",icon: "Camera"}
      },
    ]
  },
  ...market,
]

const router = new VueRouter({
  routes
})

export default router


