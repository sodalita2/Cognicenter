import { createRouter, createWebHistory } from "vue-router";
import { LoadingPinia } from "../stores/LoadingPinia";
import axios from "axios";



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
      path: "/cadastro",
      name: "Cadastro",
      component: () => import('../views/CadastroView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'DashboardHome',
          component: () => import('../views/Dashboard/DashboardHome.vue'),
        },
        {
          path: '/dashboard/pacientes',
          name: 'DashboardPacientes',
          component: () => import('../views/Dashboard/DashboardPacientes.vue'),
        }
      ],
    }
  ],
});



/*function ValidateToken() {

  console.log($cookies.get('sessionToken'));
  console.log($cookies.get('userID'));
  console.log("----------------------------");

  axios.get(`https://api.cognicenter.com.br/Auth.php?token=${$cookies.get('sessionToken')}&id=${$cookies.get('userID')}`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then( (response) => {
      console.log(response);
      console.log("----------------------------------------");
      if ( response.data["code"] == "1" ) {
        return true;
      } else {
        return false;
      }
  });
  
}
*/


router.beforeEach( (to) => {


  const Loading = LoadingPinia();

  Loading.isLoading = true;

  // npm i vue-cookies => define cookies de token de sessao


  if ( to.meta.requiresAuth ) {


    if ( !$cookies.isKey('sessionToken') ) {
      return '/login';
    } /*else {
      if ( ValidateToken() ) {
        console.log("flamengo");
      } else {
        console.log("bababa");
      }
      return true;
    }*/
    return true;

  } else {


    if ( to.path == '/login' && $cookies.isKey('sessionToken') ) {

      return '/dashboard';
      /*if ( console.log(ValidateToken()) ) {
        return '/dashboard';
      } else {
        $cookies.remove('sessionToken');
        $cookies.remove('userID');
        return '/login';
      }*/

    }


    // mesma coisa que next()
    return true;


  }

});


export default router;
