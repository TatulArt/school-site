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
import TeacherCell from "../../shared/TeacherCell.vue";
import teachersList from "../../shared/TeachersList.js";

export default {
  name: "Teachers",

  components: {
    TeacherCell,
  },

  computed: {
    teachers() {
      return teachersList;
    },
  },
};
</script>
