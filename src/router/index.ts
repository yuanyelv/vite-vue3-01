/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-25 22:55:11
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-26 03:27:53
 * @FilePath: \vite-vue3-01\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/indexHome.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/indexLogin.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
