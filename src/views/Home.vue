<template>
  <div class="home">
    <home-slider />
    <school-advantages />
    <teachers-section />
  </div>
</template>

<script>
import HomeSlider from "../components/HomePage/HomeSlider.vue";
import SchoolAdvantages from "../components/HomePage/SchoolAdvantages.vue";
import TeachersSection from "../components/HomePage/TeachersSection.vue";

export default {
  name: "Home",

  components: {
    HomeSlider,
    SchoolAdvantages,
    TeachersSection,
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
