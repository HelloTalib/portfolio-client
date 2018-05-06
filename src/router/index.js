import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Portfolio from '@/components/Portfolio/Portfolio'
import Intro from '@/components/Intro/Intro'
import About from '@/components/Home/About'
import Contact from '@/components/Contact/Contact'
import NotFound from '@/components/ErrorPage/NotFound'
import Posts from '@/components/Post/Posts'
import NewPost from '@/components/Post/NewPost'
import Blog from '@/components/Blog/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    { path: '*',
      component: NotFound
    },
    // {
    //   path: '/posts',
    //   name: 'Posts',
    //   component: Posts
    // },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
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
