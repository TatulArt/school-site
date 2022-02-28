<template>
  <div
    id="newsListItem"
    class="col-sm-8 col-md-8 col-lg-4 d-flex flex-column justify-content-between"
    data-aos="fade-up"
    :data-aos-delay="newsListItemIndex * 100"
  >
    <div class="m-2 col card shadow-sm">
      <div
        :id="`carousel${newsListItemIndex}`"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div v-if="images.length > 1" class="carousel-indicators">
          <button
            type="button"
            v-for="(image, imageIndex) of images"
            :key="imageIndex"
            :data-bs-target="`#carousel${newsListItemIndex}`"
            :data-bs-slide-to="imageIndex"
            :class="{
              active: imageIndex === 0,
            }"
            :aria-current="{
              true: imageIndex === 0,
            }"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(image, imageIndex) of images"
            :key="imageIndex"
            :class="{
              active: imageIndex === 0,
            }"
          >
            <img id="newsListItemImage" :src="image" />
          </div>
        </div>
      </div>

      <div class="card-body p-4">
        <h3 id="newsListItemTitle" class="pb-2">{{ title }}</h3>
        <p id="newsListItemText" class="card-text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsListItem",

  props: {
    newsListItemIndex: Number,
    images: Array,
    title: String,
    text: String,
    date: String,
  },
};
</script>

<style scoped>
#newsListItem {
  padding: 0;
}

.carousel-item {
  background-color: #ccc;
}

#newsListItemImage {
  height: 16em;
  object-fit: cover;
}
</style>
