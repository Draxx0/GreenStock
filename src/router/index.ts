import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/auth/Login.vue';
import Profile from '../pages/auth/Profile.vue';
import Home from '../pages/Home.vue';
import Post from '../pages/posts/Post.vue';
import store from '../store/auth.store';

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
  {
    path: '/settings/profile',
    name: 'Profile',
    component: Profile,
  },
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

router.beforeEach((to, _, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.meta.requiresGuest && isAuthenticated) {
    // Si l'utilisateur est authentifié et essaie d'accéder à la page de connexion, redirige vers la page d'accueil
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
