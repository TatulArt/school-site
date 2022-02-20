import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../components/modules/Home/Home.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/modules/About/About.vue"
      ),
  },
  {
    path: "/teachers",
    name: "Teachers",
    component: () =>
      import(
        /* webpackChunkName: "teachers" */ "../components/modules/Teachers/Teachers.vue"
      ),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
      import(
        /* webpackChunkName: "news" */ "../components/modules/News/News.vue"
      ),
  },
  {
    path: "/contactinfo",
    name: "ContactInfo",
    component: () =>
      import(
        /* webpackChunkName: "contactinfo" */ "../components/modules/ContactInfo/ContactInfo.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
