<template>
  <div class="news">
    <div class="container">
      <div class="album my-5">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center"
        >
          <home-news-list-item
            v-for="(newsListItem, newsListItemIndex) of news"
            :newsListItemIndex="newsListItemIndex"
            :key="newsListItem.title"
            :images="newsListItem.images"
            :title="newsListItem.title"
            :text="newsListItem.text"
            :date="newsListItem.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeNewsListItem from "../../shared/NewsListItem.vue";
import NewsList from "../../shared/NewsList.js";

export default {
  name: "HomeNews",

  components: {
    HomeNewsListItem,
  },

  data() {
    return {
      news: NewsList,
    };
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
