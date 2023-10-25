import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homeview.vue'

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
    },
    {
      path:'/HwHeader',
      name:'HwHeader',
      component:()=>import('../views/HwHeader.vue'),
      children:[
        {
          path:'/HwHome',
          component:()=>import('../views/HwHome.vue')
        }
      ]
    },
    {
      path:'/Props',
      name:'Props',
      component:()=>import('../views/Props.vue')
    },
    {
      path:"/Emit",
      name:"Emit",
      component:()=>import('../views/Emit.vue')
    },
    {
      path:"/DataFlow",
      name:"DataFlow",
      component:()=>import('../views/DataFlow.vue')
    },
    {
      path:"/1022",
      name:"1022",
      component:()=>import('../views/1022.vue')
    },
    {
      path:"/1022SgUp",
      name:"1022SgUp",
      component:()=>import('../views/1022SgUp.vue')
    },
    {
      path:"/1022main",
      name:"1022main",
      component:()=>import('../views/1022mainPage.vue')
    },
    {
      path:"/Provide",
      name:"Provide",
      component:()=>import('../views/ProvideAndInject.vue')
    },
    {
      path:"/WatchAndComputed",
      name:"WatchAndComputed",
      component:()=>import('../views/WatchAndComputed.vue')
    },
    {
      path:"/PPinia",
      name:"PPinia",
      component:()=>import('../views/PPinia.vue')
    }
  ]
})

export default router
