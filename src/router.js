import { createRouter, createWebHashHistory } from "vue-router";
import store from "./store.js";

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
      name: "surveyselection",
      component: () => import("./views/SurveySelection.vue"),
      // Pass URL query parameters as prop to component
      props: (route) => route.query,
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

    // @todo Add a 404 not found
  ],
});

export default router;
