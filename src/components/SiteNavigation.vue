<template>
  <nav class="navigation navbar navbar-expand-lg navbar-light">
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
