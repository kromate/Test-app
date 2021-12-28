import { createRouter, createWebHistory } from 'vue-router';

import Landing from '../views/landing.vue'

const routes = [

  {
    path: '/',
    name: 'landing',
    component: Landing,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
