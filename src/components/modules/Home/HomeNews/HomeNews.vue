<template>
  <section id="news">
    <div class="container">
      <div id="newsTitle">
        <h2>Новости</h2>
      </div>
      <home-news-list />
    </div>
  </section>
</template>

<script>
import HomeNewsList from "./HomeNewsList.vue";

export default {
  name: "HomeNews",

  components: {
    HomeNewsList,
  },
};
</script>
