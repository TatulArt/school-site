<template>
  <section id="teachers">
    <div class="container mb-5">
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
import TeacherCell from "../../shared/TeachersListItem.vue";
import teachersList from "../../shared/TeachersList.js";

export default {
  name: "HomeTeachers",

  components: {
    TeacherCell,
  },

  data() {
    return {
      teachers: teachersList.slice(0, 4),
    };
  },
};
</script>
