// var Layout = (resolve) => require(['@/layout/index.vue'], resolve)
export const menu = [
  {
    path: '/home',
    id: '1111',
    component: (resolve) => require(['@/views/Home'], resolve),
    name: 'home',
    meta: {title: "门户首页",icon: "home"}
  },
  {
    path: '/supply-chain',
    id: '1112',
    component: (resolve) => require(['@/views/supply-chain'], resolve),
    name: 'supply-chain',
    meta: {title: "供应链、生产",icon: "Camera"}
  },
  {
    path: '/human-resource',
    id: '1113',
    component: (resolve) => require(['@/views/human-resource'], resolve),
    name: 'human-resource',
    meta: {title: "人力资源",icon: "person"}
  },
  {
    path: '/equipment-management',
    id: '1114',
    component: (resolve) => require(['@/views/equipment-management'], resolve),
    name: 'equipment-management',
    meta: {title: "设备管理",icon: "setting"}
  },
  {
    path: '/task-tracking',
    id: '1115',
    component: (resolve) => require(['@/views/task-tracking'], resolve),
    name: 'task-tracking',
    meta: {title: "任务跟踪",icon: "copy"}
  },
  {
    path: '/report-management',
    id: '1116',
    component: (resolve) => require(['@/views/report-management'], resolve),
    name: 'report-management',
    meta: {title: "报表管理",icon: "search"}
  },
  {
    path: '/information',
    id: '1117',
    component: (resolve) => require(['@/views/information'], resolve),
    name: 'information',
    meta: {title: "信息维护",icon: "folder"}
  },
  {
    path: '/systemhelp',
    id: '1118',
    component: (resolve) => require(['@/views/systemhelp'], resolve),
    name: 'systemhelp',
    meta: {title: "系统帮助",icon: "setting"}
  },
]
