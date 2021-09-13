import Vue from 'vue'
import VueRouter from "vue-router"

import MyStore from '../components/MyStore'
import AboutUs from '../components/AboutUs'
 
Vue.use(VueRouter)

const router = new VueRouter({
  made:'history',
  routes:[
    {
      path:'/home',
      component:MyStore
    },
    {
      path:'/about',
      component:AboutUs
    }
  ]
})

export default router