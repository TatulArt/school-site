<template>
  <div class="home">
    <home-slider />
    <home-advantages />
    <home-teachers />
  </div>
</template>

<script>
import HomeSlider from "./HomeSlider.vue";
import HomeAdvantages from "./HomeAdvantages.vue";
import HomeTeachers from "./HomeTeachers.vue";

export default {
  name: "Home",

  components: {
    HomeSlider,
    HomeAdvantages,
    HomeTeachers,
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
