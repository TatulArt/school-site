<template>
  <div class="album py-5">
    <div class="row justify-content-center">
      <home-news-list-item
        v-for="(newsItem, newsItemIndex) of news"
        :newsListItemIndex="newsItemIndex"
        :key="newsItem.title"
        :images="newsItem.images"
        :title="newsItem.title"
        :text="newsItem.text"
        :date="newsItem.date"
      />
    </div>
  </div>
</template>

<script>
import HomeNewsListItem from "../../../shared/NewsListItem.vue";
import NewsList from "../../../shared/NewsList.js";

export default {
  name: "HomeNews",

  components: {
    HomeNewsListItem,
  },

  data() {
    return {
      news: NewsList.slice(0, 3),
    };
  },
};
</script>
