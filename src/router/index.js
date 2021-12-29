import { createRouter, createWebHistory } from 'vue-router';

import Landing from '../views/landing.vue'

const routes = [

  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/login.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
