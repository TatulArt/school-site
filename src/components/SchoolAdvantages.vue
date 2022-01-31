<template>
  <section id="advantages-list">
    <div class="container-wrap">
      <div id="advantages-list" class="row">
        <div
          id="advantage"
          class="col flex-column align-self-stretch pb-4 px-4"
          v-for="advantage of advantagesList"
          :key="advantage.title"
        >
          <div class="d-flex justify-content-center align-items-center">
            <div
              id="advantage-icon"
              class="d-flex justify-content-center align-items-center"
            >
              <img
                :src="require(`../assets/AdvantagesIcons/${advantage.icon}`)"
                class="d-block w-50"
              />
            </div>
          </div>
          <h5>{{ advantage.title }}</h5>
          <span>{{ advantage.text }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    advantagesList() {
      return [
        {
          icon: "teacher.png",
          title: "Обученные Учителя",
          text: "",
        },
        {
          icon: "student.png",
          title: "Качественное Образование",
          text: "",
        },
        {
          icon: "books.png",
          title: "Собственная Библиотека",
          text: "",
        },
        {
          icon: "certificate.png",
          title: "Множество Школьных Наград",
          text: "",
        },
      ];
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}

#advantage:nth-child(1) {
  background-color: #007bff;
}

#advantage:nth-child(2) {
  background-color: #28a745;
}

#advantage:nth-child(3) {
  background-color: #6f42c1;
}

#advantage:nth-child(4) {
  background-color: #dc3545;
}

#advantage-icon {
  margin-top: -60px;
  z-index: 1;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
}
</style>
