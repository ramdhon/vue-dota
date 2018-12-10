// Route level code-splitting
// component: () => import(/* webpackChunkName: "component" */ './views/Component.vue'),

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/heroes',
      component: () => import(/* webpackChunkName: "heroes" */ './views/Heroes.vue'),
      children: [
        {
          path: '',
          name: 'heroes',
          component: () => import(/* webpackChunkName: "info" */ './components/Info.vue'),
        },
        {
          path: ':id',
          name: 'hero-details',
          component: () => import(/* webpackChunkName: "hero-details" */ './components/HeroDetails.vue'),
        },
      ],
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import(/* webpackChunkName: "not-found" */ './views/NotFound.vue'),
    },
  ],
});
