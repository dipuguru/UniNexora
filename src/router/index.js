
import {
  createRouter,
  createWebHistory
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 90,
        behavior: "smooth"
      };
    }

    return { top: 0 };
  }
});

export default router;
