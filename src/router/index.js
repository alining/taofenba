import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import Promcat from '@/components/page/promcat'
import Affordable from "@/components/page/affordable"
import FreeShipping from "@/components/page/freeShipping"
import Sale from "@/components/page/sale"

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path : "/",
  		redirect : "/index"
  	},
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Promcat',
      name: 'Promcat',
      component: Promcat
    },
    {
      path: '/Affordable',
      name: 'Affordable',
      component: Affordable
    },
    {
      path: '/FreeShipping',
      name: 'FreeShipping',
      component: FreeShipping
    },
    {
      path: '/Sale',
      name: 'Sale',
      component: Sale
    }
  ]
})
