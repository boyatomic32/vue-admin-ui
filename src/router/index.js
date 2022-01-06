import Layout from '@/layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// import chartRouter from './modules/chart'
// import componentsPage from './modules/components-page'
// import errorRouter from './modules/error-page'
// import formRouter from './modules/form'
/* Router Modules */
// import nestedRouter from './modules/nested'
// import tableRouter from './modules/table'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ '@/components/Redirect/index.vue'
          ),
      },
    ],
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'สรุปข้อมูล',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
          ),
        meta: { title: 'สรุปข้อมูล', icon: 'dashboard' },
      },
    ],
  },
  {
    path: '/summary-drivers',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/summary-drivers/index.vue'),
        name: 'สรุปการใช้งาน',
        meta: { title: 'สรุปการใช้งาน', icon: 'component', noCache: true },
      },
    ],
  },
  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/users/index.vue'),
        name: 'ผู้ใช้งานทั้งหมด',
        meta: { title: 'ผู้ใช้งานทั้งหมด', icon: 'peoples', noCache: true },
      },
    ],
  },
  {
    path: '/drivers',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/drivers/index.vue'),
        name: 'คนขับรถ',
        meta: { title: 'คนขับรถ', icon: 'people', noCache: true },
      },
    ],
  },
  {
    path: '/cars',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/cars/index.vue'),
        name: 'รถเก็บขยะ',
        meta: { title: 'รถเก็บขยะ', icon: 'shopping', noCache: true },
      },
    ],
  },
  {
    path: '/banners',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/banners/index.vue'),
        name: 'โฆษณา',
        meta: { title: 'โฆษณา', icon: 'el-icon-picture', noCache: true },
      },
    ],
  },
  {
    path: '/categories',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/categories/index.vue'),
        name: 'ประเภทขยะ',
        meta: {
          title: 'ประเภทขยะ',
          icon: 'el-icon-delete-solid',
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/sub-categories',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/sub-categories/index.vue'),
        name: 'ประเภทขยะย่อย',
        meta: {
          title: 'ประเภทขยะย่อย',
          icon: 'el-icon-delete',
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/partners',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/partners/index.vue'),
        name: 'Partners',
        meta: { title: 'Partners', icon: 'tree', noCache: true },
      },
    ],
  },
  // tableRouter,
  // chartRouter,
  // {
  //   path: '/online',
  //   hidden: true,
  //   component: Layout,
  //   name: 'onlineRouter',
  //   meta: { title: 'online', icon: 'el-icon-cloudy' },
  //   children: [
  //     {
  //       path: ':id',
  //       name: 'onlineRouterTem',
  //       meta: { title: 'onlineRouter' },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "online" */ '@/components/Online/list.vue'
  //         ),
  //     },
  //     {
  //       path: 'add',
  //       name: 'addOnlineRouterTem',
  //       meta: { title: 'add online template' },
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "online" */ '@/views/online/createList.vue'
  //         ),
  //     },
  //   ],
  // },
  // formRouter,

  // componentsPage,
  // nestedRouter,
  // errorRouter,

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "icon" */ '@/views/icons/index.vue'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true },
      },
    ],
  },

  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    hidden: true,
  },
  { path: '/:pathMatch(.*)*', redirect: '/error/404', hidden: true },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const history = createWebHashHistory()
const router = createRouter({
  history,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: constantRoutes,
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
    routes: constantRoutes,
  })
  router.matcher = newRouter.matcher // reset router
}
