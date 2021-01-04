import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(
      /* webpackChunkName: "Home" */
      /* webpackPreload: true */
      '@/pages/Home.vue'
      ),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(
      /* webpackChunkName: "Form" */
      /* webpackPrefetch: true */
      '@/pages/Form.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
