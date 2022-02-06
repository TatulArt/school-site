<template>
  <site-header />
  <site-navigation />
  <router-view />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteNavigation from "./components/SiteNavigation.vue";

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
