<template>
  <div class="about">
    <about-achievements />
  </div>
</template>

<script>
import AboutAchievements from "./AboutAchievements.vue";

export default {
  name: "About",

  components: {
    AboutAchievements,
  },
};
</script>

<style scoped>
* {
  text-align: left;
}

p {
  color: #7c7c7d;
}
</style>
