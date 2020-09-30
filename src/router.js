import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Home,
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // alias: '/',
  },
  {
    path: '/learn',
    component: () => import('./views/Learn'),
  },
  {
    path: '/student',
    component: () => import('./views/Student'),
  },
  {
    path: '/activity',
    component: () => import('./views/Activity'),
    redirect: { name: 'personal' },
    children: [
      // {
      //   path: '',
      //   name: 'academic',
      //   component: () => import('./views/Academic'),
      // },
      {
        path: 'academic',
        name: 'academic',
        component: () => import('./views/Academic'),
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('./views/Personal'),
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('./views/Download'),
      }
    ],
  },
  {
    path: '/about',
    component: () => import('./views/About'),
  },

];

export default new VueRouter({
  routes,
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact',
  mode: 'history',
});
