import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home.vue')
const Login = () => import('@/components/Login.vue')
const About = () => import('@/components/About.vue')
import Firebase from "firebase";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      alias: ['/home', '/inicio'],
      component: Home,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requireLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requireLogin)

  if (authRequired && !user) {
    next('login')
  } else if (!authRequired && user) {
    next('home');
  } else {
    next()
  }
})

export default router;
