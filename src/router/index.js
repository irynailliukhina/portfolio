import { createRouter, createWebHistory } from 'vue-router'
console.log(import.meta.env.BASE_URL)

const router = createRouter({
  history: createWebHistory('portfolio'),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: 'portfolio/work',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: 'portfolio/:notFound(.*)',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
