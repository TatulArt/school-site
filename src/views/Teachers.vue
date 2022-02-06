<template>
  <div class="container mt-5">
    <div class="row">
      <teacher-cell
        v-for="teacher of teachers"
        :key="teacher.name"
        :teacher="teacher"
      />
    </div>
  </div>
</template>

<script>
import TeacherCell from "../components/TeacherCell.vue";
import getTeachersList from "../assets/Utilities/TeachersList.js";

export default {
  name: "Teachers",

  components: {
    TeacherCell,
  },

  computed: {
    teachers() {
      const teachersList = getTeachersList();

      return teachersList.map((teacher) => {
        if (!teacher.image) {
          teacher.image = "defaultImage.svg";
        }

        return teacher;
      });
    },
  },
};
</script>
