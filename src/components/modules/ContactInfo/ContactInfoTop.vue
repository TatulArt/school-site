<template>
  <div id="contactInfo" class="row d-flex mb-5">
    <div class="col-md-3 d-flex">
      <div
        id="info"
        class="bg-light col p-4 d-flex flex-column justify-content-center"
      >
        <h3 class="mb-4">Адрес</h3>
        <small>
          Краснодарский край, Туапсинский р-н, г. Туапсе, ул. Горького 40
        </small>
      </div>
    </div>
    <div class="col-md-3 d-flex">
      <div
        id="info"
        class="bg-light col p-4 d-flex flex-column justify-content-center"
      >
        <h3 class="mb-4">Телефон</h3>
        <a href="tel://27242">2-72-42</a>
      </div>
    </div>
    <div class="col-md-3 d-flex">
      <div
        id="info"
        class="bg-light col d-flex flex-column justify-content-center"
      >
        <h3 class="mb-4">E-Mail</h3>
        <a href="mailto:school4@tuap.kubannet.ru">school4@tuap.kubannet.ru </a>
      </div>
    </div>
    <div class="col-md-3 d-flex">
      <div
        id="info"
        class="p-4 bg-light col d-flex flex-column justify-content-center"
      >
        <h3 class="mb-4">Наш Сайт</h3>
        <a href="http://www.sosh4tuap.edusite.ru/">www.sosh4tuap.edusite.ru</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfoTop",
};
</script>

<style scoped>
#contactInfo {
  text-align: center;
  font-size: 14px;
}
</style>
