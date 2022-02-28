<template>
  <section id="slider">
    <div class="position-relative">
      <div id="slider-content">
        <div
          id="carouselExampleIndicators"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item"
              data-bs-interval="5000"
              v-for="(photo, index) of sliderPhotos"
              :key="index"
              :class="{
                active: index === 0,
              }"
            >
              <img id="sliderPhoto" :src="photo" class="d-block w-100" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Предыдущий слайд</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Следущий слайд</span>
          </button>
        </div>
      </div>

      <div
        id="slider-caption"
        class="position-absolute top-50 start-50 translate-middle"
      >
        <div data-aos="fade-up">
          <h2 id="caption-text">
            Добро пожаловать на веб-сайт<br />МБОУ СОШ №4 города Туапсе!
          </h2>
          <router-link
            to="/about"
            class="rounded-pill btn px-4 py-3 mt-3"
            id="about-btn"
          >
            О школе
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSlider",

  data() {
    return {
      sliderPhotos: [
        require("../../../assets/SliderPhotos/5e33b2fd6c44a8a191196ee24623a0d9.jpg"),
        require("../../../assets/SliderPhotos/8e91844ae54cc2a6bc6b941c11e63937.jpg"),
        require("../../../assets/SliderPhotos/b1028d8a49c6088bc9305f061243b68c_0.jpg"),
        require("../../../assets/SliderPhotos/cba0133a349bc2fb39bacb9c1f84744d_0.jpg"),
        require("../../../assets/SliderPhotos/c120deb837b7dc1e79dacf18938045ea.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
#sliderPhoto {
  object-fit: cover;
  height: 800px;
}

#slider-content {
  z-index: 1;
}

#slider-caption {
  z-index: 2;
}

#slider-caption #caption-text {
  color: white;
  font-weight: bold;
}

#slider-caption #about-btn {
  color: white;
  background-color: #fda638;
  border: solid #fda638 1px;
}

#slider-caption #about-btn:hover {
  background-color: black;
  border: solid black 1px;
}

.carousel-item {
  filter: brightness(0.8);
}
</style>
