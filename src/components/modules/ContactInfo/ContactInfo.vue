<template>
  <div class="container mt-5">
    <contact-info-top />
    <contact-info-bottom />
  </div>
</template>

<script>
import ContactInfoTop from "./ContactInfoTop.vue";
import ContactInfoBottom from "./ContactInfoBottom.vue";

export default {
  name: "ContactInfo",
  components: {
    ContactInfoTop,
    ContactInfoBottom,
  },
};
</script>
