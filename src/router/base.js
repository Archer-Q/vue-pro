// var Layout = (resolve) => require(['@/layout/index.vue'], resolve)
export const base = [
  {
    path: '/login',
    id: '0001',
    component: (resolve) => require(['@/base/Login/index'], resolve),
    name: 'login',
    meta: {title: "登录页",icon: ""}
  },
  {
    path: '/404',
    id: '404',
    component: (resolve) => require(['@/components/error-page/404'], resolve),
    name: '404',
    meta: {title: "",icon: ""}
  },
  {
    path: '*',
    redirect: '/404'
  }
]
