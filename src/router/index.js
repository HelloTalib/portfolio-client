import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Portfolio from '@/components/Portfolio/Portfolio'
import Contact from '@/components/Contact/Contact'
import NotFound from '@/components/ErrorPage/NotFound'


Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    { path: '*',
      component: NotFound
    },
    // {
    //   path: '/',
    //   name: 'intro',
    //   component: Intro
    // },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
