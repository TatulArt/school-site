<template>
  <nav
    id="navbar"
    class="navigation navbar navbar-expand-lg bg-white navbar-light"
  >
    <div class="container">
      <router-link to="/" class="btn" id="logo-btn"></router-link>

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
            <router-link to="/contactinfo">Контактная информация</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SiteNavigation",

  mounted() {
    window.addEventListener("scroll", this.fixNavbar);
  },

  methods: {
    fixNavbar() {
      const navbar = document.getElementById("navbar");

      window.scrollY > 200
        ? navbar.classList.add("navbar-sticky")
        : navbar.classList.remove("navbar-sticky");
    },
  },
};
</script>

<style scoped>
.navbar-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
}

#logo-btn {
  background-image: url(../../assets/Common/logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 3.5em;
  height: 5.5em;
  box-shadow: 0 0 0 0;
}

a.router-link-exact-active {
  color: #1eaaf1;
}
</style>
