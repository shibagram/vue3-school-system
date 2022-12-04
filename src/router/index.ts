import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup';
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
  ]
})

// todo: 惜しいけど違うので修正
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        return {
          path: '/login',
        }
      }
    })
  }
})
export default router
