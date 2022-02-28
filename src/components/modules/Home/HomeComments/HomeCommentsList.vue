<template>
  <div id="commentsList" class="container mb-5">
    <div id="commentsListTitle" class="d-flex justify-content-center mb-5">
      <div class="text-center">
        <h2 data-aos="fade-up">Комментарии</h2>
      </div>
    </div>
    <div
      id="carousel"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <div class="carousel-inner">
        <div
          id="comment"
          v-for="(comment, index) of comments"
          :key="index"
          :class="{
            active: index === 0,
          }"
          class="carousel-item col-lg-8"
        >
          <div id="commentContent" class="row d-flex justify-content-center">
            <div id="commentImageContainer" class="mb-2">
              <img id="commentImage" :src="comment.image" />
            </div>
            <div id="commentText" class="col-7">
              <p id="commentQuote">
                {{ comment.quote }}
              </p>
              <p id="commentName">{{ comment.name }}</p>
              <span id="commentPosition">{{ comment.position }}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
import commentsList from "../../../shared/CommentsList.js";

export default {
  name: "CommentsList",

  data() {
    return {
      comments: commentsList,
    };
  },
};
</script>

<style scoped>
#commentImage {
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

#commentText {
  position: relative;
  padding-top: 2.5em;
}

#commentText::before {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: "";
  z-index: -1;
  opacity: 0.08;
  background-image: url("../../../../assets/Common/left-quote.png");
  background-repeat: no-repeat;
  background-size: 5em;
  background-position: top center;
}

#commentQuote {
  height: 8em;
}

#commentName {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 0;
  color: #000000;
}

#commentPosition {
  font-size: 14px;
  color: #1eaaf1;
}
</style>
