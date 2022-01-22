<template>
  <div class="py-3 bg-primary">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <span class="text">
            Краснодарский край, Туапсинский р-н, г. Туапсе, ул. Горького 40
          </span>
        </div>
        <div class="col-md d-flex justify-content-center align-items-center">
          <span class="text">sosh4tuapse@gmail.com</span>
        </div>
        <div class="col-md d-flex justify-content-center align-items-center">
          <span class="text">2-72-42</span>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Школа №4</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse flex-grow-0"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav" id="nav">
          <li class="nav-item me-2">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="nav-item me-2">
            <router-link to="/about">О школе</router-link>
          </li>
          <li class="nav-item me-2">
            <router-link to="/teachers">Учителя</router-link>
          </li>
          <li class="nav-item me-2">
            <router-link to="/news">Новости</router-link>
          </li>
          <li class="nav-item me-2">
            <router-link to="/hotline">Горячая линия</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.text {
  color: rgba(255, 255, 255, 0.7);
}
</style>
