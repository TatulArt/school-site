<template>
  <div id="slider" class="position-relative">
    <div id="slider-content">
      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img
              src="../assets/5e33b2fd6c44a8a191196ee24623a0d9.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="../assets/8e91844ae54cc2a6bc6b941c11e63937.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="../assets/b1028d8a49c6088bc9305f061243b68c_0.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="../assets/cba0133a349bc2fb39bacb9c1f84744d_0.jpg"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="../assets/c120deb837b7dc1e79dacf18938045ea.jpg"
              class="d-block w-100"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div
      id="slider-caption"
      class="position-absolute top-50 start-50 translate-middle"
    >
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
</template>

<style scoped>
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

.carousel-item img {
  filter: brightness(0.8);
}
</style>
