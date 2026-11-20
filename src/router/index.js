
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/solutions",
    name: "Solutions",
    component: HomeView
  },
  {
    path: "/industries",
    name: "Industries",
    component: HomeView
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
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

    const sectionHashes = {
      "/solutions": "#solutions",
      "/industries": "#industries",
      "/how-it-works": "#how-it-works"
    };

    const hash = to.hash || sectionHashes[to.path];

    if (hash) {
      return {
        el: hash,
        top: 90,
        behavior: "smooth"
      };
    }

    return {
      top: 0,
      behavior: "smooth"
    };
  }
});

export default router;
