<template>
  <div
    id="teacher"
    class="col-md-6 col-lg-3 d-flex flex-column justify-content-between"
  >
    <div id="teacher-image" class="img-wrap ratio ratio-1x1">
      <img
        class="d-block w-100"
        :src="require(`../assets/TeachersPhotos/${teacher.image}`)"
      />
    </div>
    <div id="teacher-info" class="mt-3 text-center">
      <h3 id="teacher-name">{{ teacher.name }}</h3>
      <span id="teacher-position">{{ teacher.position }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherSell",

  props: {
    teacher: {
      type: Object,
      required: true,
      default: (value) => typeof value === "object",
    },
  },
};
</script>

<style scoped>
#teacher {
  color: black;
  -webkit-transition: color 0.3s, -webkit-transform 0.3s;
  transition: color 0.3s;
}

#teacher:hover {
  color: #1eaaf1;
  -webkit-transition: color 0.3s, -webkit-transform 0.3s;
  transition: color 0.3s;
}

#teacher:hover img {
  -webkit-transition: color 0.3s, -webkit-transform 0.3s;
  transition: color 0.3s;
}

#teacher-position {
  color: #b3b3b3;
}
</style>
