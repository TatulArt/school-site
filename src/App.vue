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
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap");

#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0d6efd;
}

a {
  color: black;
  text-decoration: none;
}
</style>
