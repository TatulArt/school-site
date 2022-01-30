<template>
  <section id="advantages-list">
    <div class="container-wrap">
      <div id="advantages-list" class="row">
        <div
          id="advantage"
          class="col"
          v-for="advantage of advantagesList"
          v-bind:key="advantage.title"
        >
          <img :src="advantage.icon" />
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
          icon: "../assets/AdvantagesIcons/teacher.png",
          title: "Обученные Учителя",
          text: "",
        },
        {
          title: "Качественное Образование",
          text: "",
        },
        {
          title: "Собственная Библиотека",
          text: "",
        },
        {
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
</style>
