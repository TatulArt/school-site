<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="order-md-last col-lg-5 py-5 px-4 bg-light"
        >
          <h2 class="mb-4">Добро пожаловать в раздел о нашей Школе!</h2>
          <p>
            Школа №4 города Туапсе была основана в 1981 году. Ей присвоено имя
            Ивана Николаевича Чабанова - героя Великой Отечественной войны.
          </p>
          <p>
            В нашей школе работают только лучшие учителя, которые изо дня в день
            обучают наших учеников достигать новых высот.
          </p>
        </div>
        <div data-aos="fade-up" id="achievementsList" class="col-lg row my-5">
          <div
            id="achievement"
            v-for="achievement of achievements"
            :key="achievement.title"
            class="col-lg-5 d-flex align-items-start"
          >
            <div id="achievementIcon">
              <img class="p-2" :src="achievement.icon" />
            </div>

            <div id="achievementDescription">
              <h3>{{ achievement.title }}</h3>
              <p>
                {{ achievement.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      achievements: [
        {
          icon: require("../../../assets/AchievementsIcons/badge.png"),
          title: "Медали",
          description:
            "Среди выпускников нашей школы 112 «золотых» и 154 «серебряных» медалистов.",
        },
        {
          icon: require("../../../assets/AchievementsIcons/trophy.png"),
          title: "Национальный проект «Образование»",
          description:
            "В 2006 году школа стала первым в городе Туапсе победителем конкурса в рамках приоритетного национального проекта «Образование».",
        },
        {
          icon: require("../../../assets/AchievementsIcons/star-medal.png"),
          title: "Память о Герое",
          description:
            "В 2014 году школе присвоено почетное имя героя Великой Отечественной войны, полного кавалера орденов Славы 3-х степеней Ивана Николаевича Чабанова.",
        },
        {
          icon: require("../../../assets/AchievementsIcons/stage.png"),
          title: "Наша школа - одна из лучших",
          description:
            "По итогам 2014 года наша школа вошла в число 100 муниципальных и государственных общеобразовательных организаций Краснодарского края, обеспечивающих высокий уровень подготовки выпускников.",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  text-align: left;
}

p {
  color: #7c7c7d;
}

#achievementIcon {
  background-color: #1eaaf1;
  border-radius: 50%;
  margin-right: 1em;
}

#achievementIcon img {
  width: 50px;
  height: 50px;
}
</style>
