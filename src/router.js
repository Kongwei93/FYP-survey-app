import { createRouter, createWebHashHistory } from "vue-router";
import store from "./store.js";
import { auth } from "./firebase";

const router = createRouter({
  history: createWebHashHistory(),

  // Always scroll to top of view on first visit and no savedPosition, else reuse savedPosition
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  },

  /**
   * @notice
   * Routes uses lazily loaded components with route level code-splitting
   * this generates a separate chunk (about.[hash].js) for this route
   * which is lazy-loaded when the route is visited.
   */
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
      // Pass URL query parameters as prop to component
      props: (route) => route.query,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/surveyselection",
      name: "surveyselection",
      component: () => import("./views/SurveySelection.vue"),
      // Pass URL query parameters as prop to component
      props: (route) => route.query,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("./views/Terms.vue"),
    },
    {
      path: "/perceivedss",
      name: "perceivedss",
      component: () => import("./views/PerceivedSS.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/patienthq",
      name: "patienthq",
      component: () => import("./views/PatientHQ.vue"),
      meta: {
        requiresAuth: true,
      },
    },

    // @todo Add a 404 not found
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
