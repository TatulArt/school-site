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

export default {
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
