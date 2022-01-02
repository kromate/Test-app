import { createRouter, createWebHistory } from 'vue-router';

import Landing from '../views/landing.vue'
import {global} from '../composables/useAuth'

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
        meta: {
      requiresGuest: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/homepage.vue'),
   meta: {
      requiresAuth: true
    }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log( global.authState);
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  if (requiresAuth && !global.authState) {
    next({ name: "login" });
  } 
  else if(requiresGuest && global.authState) {
    next({ name: "home" });
  }else{
    next()
  }
});

export default router
