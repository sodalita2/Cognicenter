import { createRouter, createWebHistory } from "vue-router";
import { AuthPinia } from "../stores/AuthPinia";


// local variable Auth = AuthPinia Store
//const Auth = AuthPinia();


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import('../views/LoginView.vue'),
      meta : { requiresAuth: false },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../views/ContatoView.vue'),
      meta: { requiresAuth: true },
    }
  ],
});


router.beforeEach( (to) => {

  const Auth = AuthPinia();

  const localToken = localStorage.getItem("sessionToken");

  if (to.meta.requiresAuth && !Auth.isLogged && !localToken ) {
    return '/login'
  } else if (to.meta.requiresAuth && !Auth.isLogged && localToken ) {
    Auth.logIn();
    return true;
  } else {
    // mesma coisa que next()
    return true;
  }

});


export default router;
