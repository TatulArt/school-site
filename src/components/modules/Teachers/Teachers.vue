<template>
  <div class="container my-5">
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
import TeacherCell from "../../shared/TeachersListItem.vue";
import teachersList from "../../shared/TeachersList.js";

export default {
  name: "Teachers",

  components: {
    TeacherCell,
  },

  data() {
    return {
      teachers: teachersList,
    };
  },
};
</script>
