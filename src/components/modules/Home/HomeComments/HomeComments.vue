<template>
  <section id="comments">
    <home-comments-list />
    <home-comments-maker />
  </section>
</template>

<script>
import HomeCommentsList from "./HomeCommentsList.vue";
import HomeCommentsMaker from "./HomeCommentsMaker.vue";

export default {
  name: "HomeComments",

  components: {
    HomeCommentsList,
    HomeCommentsMaker,
  },
};
</script>
