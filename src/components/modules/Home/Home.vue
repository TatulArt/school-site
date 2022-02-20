<template>
  <div class="home">
    <home-slider />
    <home-advantages />
    <home-teachers />
    <home-comments />
    <home-news />
  </div>
</template>

<script>
import HomeSlider from "./HomeSlider.vue";
import HomeAdvantages from "./HomeAdvantages.vue";
import HomeTeachers from "./HomeTeachers.vue";
import HomeComments from "./HomeComments/HomeComments.vue";
import HomeNews from "./HomeNews/HomeNews.vue";

export default {
  name: "Home",

  components: {
    HomeSlider,
    HomeAdvantages,
    HomeTeachers,
    HomeComments,
    HomeNews,
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
