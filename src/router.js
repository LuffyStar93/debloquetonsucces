import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Accueil.vue'
import auth from "./utils/auth";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Home
    },
    {
      path: '/jeux',
      name: 'jeux',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Jeux.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/FAQ.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: (to, from, next) => {
        if (auth.getLocalToken()) next('/user/moi');
        else next();
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: '/inscription',
      name: 'inscription',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Inscription.vue')
    },
    {
      path: "/user",
      name: "user",
      beforeEnter: (to, from, next) => {
        if (!auth.getLocalToken()) next("/login");
        else next();
      },
      children: [
        {
          name: "mon-compte",
          path: "moi",
          component: () =>
            import(/* webpackChunkName: "dashboard-me" */ "./views/DashboardMe.vue")
        },
        {
          name: "mes-jeux",
          path: "mes-jeux",
          component: () =>
            import(/* webpackChunkName: "dashboard-users" */ "./views/DashboardMyGames.vue")
        },
        {
          name: "guides-fav",
          path: "guides-favoris",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/DashboardGuidesFavoris.vue")
        }
      ],
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/404",
      component: () =>
        import(/* webpackChunkName: "pagenotfound" */ "./views/PageNotFound.vue")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
})
