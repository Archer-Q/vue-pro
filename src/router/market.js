// var Layout = (resolve) => require(['@/layout/index.vue'], resolve)
export const market = [
  {
    path: '/order-intention',
    id: '1112',
    component: (resolve) => require(['@/views/market/order-intention'], resolve),
    name: 'order-intention',
    meta: {title: "εΊη¨εε",icon: "Camera"}
  },
]
