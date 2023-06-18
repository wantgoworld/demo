import { createRouter, createWebHashHistory } from 'vue-router/auto'

export const UNAUTHORIZED_PATH = '/login'
export const HOME_PATH = '/home'

const router = createRouter({
  history: createWebHashHistory(),
  extendRoutes: routes => {
    routes.push({ path: '/', redirect: '/home' })
    return routes
  },
})

export default router
