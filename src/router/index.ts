import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Curriculums from '../views/curriculums/Curriculums.vue';
import VueCurriculumTable from '../views/curriculums/VueCurriculumTable.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup';
import { auth } from "@/firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/curriculums',
      name: 'curriculums',
      component: Curriculums,
      meta: { requiresAuth: true }
    },
    {
      path: '/curriculums/vue',
      name: 'vue-curriculum-table',
      component: VueCurriculumTable,
      meta: { requiresAuth: true }
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

// todo: ホーム画面でリロードした時にログイン画面に飛んでしまうので後で修正
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !auth.currentUser) {
//     next({path: '/login'});
//   } else {
//     next();
//   }
// })
export default router
