import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Tasks from '@/views/tasks/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/tasks',
    children: [
      { path: '/tasks', component: Tasks },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
