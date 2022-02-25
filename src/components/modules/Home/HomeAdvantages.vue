<template>
  <section id="advantages">
    <div class="container-fluid mb-5">
      <div id="advantages-list" class="row">
        <div
          id="advantage"
          class="col flex-column p-2 pb-4 px-4"
          v-for="advantage of advantagesList"
          :key="advantage.title"
        >
          <div class="d-flex justify-content-center align-items-center mb-3">
            <div
              id="advantage-icon"
              class="d-flex justify-content-center align-items-center"
            >
              <img :src="advantage.icon" class="d-block w-50" />
            </div>
          </div>
          <div id="advantageText" class="pb-4 mt-3">
            <h5>{{ advantage.title }}</h5>
            <span>{{ advantage.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeAdvantages",

  data() {
    return {
      advantagesList: [
        {
          icon: require("../../../assets/AdvantagesIcons/teacher.png"),
          title: "Обученные Учителя",
          text: "",
        },
        {
          icon: require("../../../assets/AdvantagesIcons/student.png"),
          title: "Качественное Образование",
          text: "",
        },
        {
          icon: require("../../../assets/AdvantagesIcons/books.png"),
          title: "Собственная Библиотека",
          text: "",
        },
        {
          icon: require("../../../assets/AdvantagesIcons/certificate.png"),
          title: "Множество Школьных Наград",
          text: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  color: white;
}

#advantage:nth-child(1),
#advantage:nth-child(3) {
  background-color: #1eaaf1;
}

#advantage:nth-child(2),
#advantage:nth-child(4) {
  background-color: #1e96f1;
}

#advantage-icon {
  margin-top: -60px;
  z-index: 1;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: white;
}
</style>
