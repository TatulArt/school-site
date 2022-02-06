<template>
  <nav class="navigation navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link to="/" class="btn" id="logo-btn"
        ><h4>Школа №4</h4></router-link
      >

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
          <li class="nav-item me-3">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/about">О школе</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/teachers">Учителя</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/news">Новости</router-link>
          </li>
          <li class="nav-item me-3">
            <router-link to="/hotline">Горячая линия</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#logo-btn h4 {
  font-weight: bold;
}

#logo-btn.router-link-exact-active {
  color: black;
}

a.router-link-exact-active {
  color: #1eaaf1;
}
</style>
