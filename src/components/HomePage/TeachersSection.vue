<template>
  <section id="teachers">
    <div class="container">
      <div id="sectionDescription">
        <h2>Наши Педагоги</h2>
        <span></span>
      </div>
      <div id="teachersList" class="container pt-4">
        <div class="row">
          <teacher-cell
            v-for="teacher of teachers"
            :key="teacher.name"
            :teacher="teacher"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeacherCell from "../TeacherCell.vue";
import getTeachersList from "../../assets/Utilities/TeachersList.js";

export default {
  components: {
    TeacherCell,
  },

  computed: {
    teachers() {
      const teachersList = getTeachersList();

      return teachersList.slice(0, 4).map((teacher) => {
        if (!teacher.image) {
          teacher.image = "defaultImage.svg";
        }

        return teacher;
      });
    },
  },
};
</script>
