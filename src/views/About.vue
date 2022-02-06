<template>
  <div class="about">
    <achievements-section />
  </div>
</template>

<script>
import AchievementsSection from "../components/AboutPage/AchievementsSection.vue";

export default {
  name: "About",

  components: {
    AchievementsSection,
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
