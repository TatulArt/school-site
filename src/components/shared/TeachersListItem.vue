<template>
  <div id="teacher" class="mb-2 col-md-6 col-lg-3">
    <div data-aos="fade-up" :data-aos-delay="index * 150">
      <div id="teacher-image" class="ratio ratio-1x1">
        <img class="d-block w-100" :src="teacher.image" />
      </div>
      <div id="teacher-info" class="mt-3 text-center">
        <h3 id="teacher-name">{{ teacher.name }}</h3>
        <span id="teacher-position">{{ teacher.position }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachersListItem",

  props: {
    teacher: {
      type: Object,
      required: true,
      validator: (value) => typeof value === "object",
    },
    index: Number,
  },
};
</script>

<style scoped>
#teacher {
  padding-bottom: 2em;
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
