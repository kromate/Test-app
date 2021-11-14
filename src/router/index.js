import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/landing.vue'
import Alert from '../views/alert.vue'

const routes = [

  {
    path: '/',
    name: 'landing',
    component: Landing,
	meta:{
		layout:'landing'
	}
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert,
	meta:{
		layout:'landing'
	}
  },
  {
    path: '/add',
    name: 'Add',
    component: ()=> import('../views/addAlert.vue'),
	meta:{
		layout:'add'
	}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
