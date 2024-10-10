import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/auth/Login.vue';
import Home from '../pages/Home.vue';
import Post from '../pages/posts/Post.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '/auth/register',
  //   name: 'Register',
  //   component: {},
  // }
  // {
  //   path: '/posts',
  //   name: 'Posts',
  //   component: {},
  // },
  {
    path: '/posts/:slug',
    name: 'Post',
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
