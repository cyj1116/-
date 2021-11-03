import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import List from '../views/List.vue';
import History from '../views/History.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/List',
    // name: 'List',
    component: List
  },
  {
    path: '/History',
    // name: 'History',
    component: History
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
