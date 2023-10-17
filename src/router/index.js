import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtextAndVModel',
      name: 'VtextAndVModel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/VtextAndVModel.vue')
    },
    {
      path:'/Vfor',
      name:'Vfor',
      component:()=>import('../views/Vfor.vue')
    },
    {
      path:'/Von',
      name:'Von',
      component:()=>import('../views/Von.vue')
    },
    {
      path:'/workS',
      name:'workS',
      component:()=>import('../views/WorkS.vue')
    },
    {
      path:'/vbind',
      name:'vbind',
      component:()=>import('../views/Vbind.vue')
    },
    {
      path:'/vifAndvshow',
      name:'vifAndvshow',
      component:()=>import('../views/VifAndvshow.vue')
    }
  ]
})

export default router
