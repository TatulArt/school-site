<template>
  <site-header />
  <site-navigation />
  <router-view />
  <site-footer />
</template>

<script>
import SiteHeader from "./modules/SiteHeader.vue";
import SiteNavigation from "./modules/SiteNavigation.vue";
import SiteFooter from "./modules/SiteFooter.vue";
import AOS from "aos";

export default {
  mounted() {
    AOS.init({
      duration: 700,
      once: true,
    });

    window.addEventListener("scroll", this.fixNavbar);
  },

  methods: {
    fixNavbar() {
      const navbar = document.getElementById("navbar");
      const header = document.getElementById("siteHeader");

      if (window.scrollY > 200) {
        navbar.classList.add("navbar-sticky");
        header.style.paddingBottom = "96px";
      } else {
        navbar.classList.remove("navbar-sticky");
        header.style.paddingBottom = "0";
      }
    },
  },

  name: "App",

  components: {
    SiteHeader,
    SiteNavigation,
    SiteFooter,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

a {
  color: black;
  text-decoration: none;
}
</style>
