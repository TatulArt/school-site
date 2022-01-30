<template>
  <div class="home">
    <home-slider />
    <school-advantages />
  </div>
</template>

<script>
import HomeSlider from "../components/HomeSlider.vue";
import SchoolAdvantages from "../components/SchoolAdvantages.vue";

export default {
  name: "Home",

  components: {
    HomeSlider,
    SchoolAdvantages,
  },
};
</script>
