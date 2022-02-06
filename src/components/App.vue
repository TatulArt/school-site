<template>
  <site-header />
  <site-navigation />
  <router-view />
</template>

<script>
import SiteHeader from "./modules/SiteHeader.vue";
import SiteNavigation from "./modules/SiteNavigation.vue";

export default {
  components: {
    SiteHeader,
    SiteNavigation,
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
