<template>
  <SiteHeader />
</template>

<script>
import SiteHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap");

* {
  font-family: "Nunito", sans-serif;
}
</style>
