<template>
  <div class="content-details--left">
    <Contact />
    <Technologies />
    <Education />
  </div>
  <div class="content-details--right">
    <Experience />
    <Project />
  </div>
</template>

<script>
import Contact from "./Contact.vue";
import Technologies from "./Technologies.vue";
import Education from "./Education.vue";
import Experience from "./Experience.vue";
import Project from "./Project.vue";

export default {
  name: "Content",
  components: {
    Contact,
    Technologies,
    Education,
    Experience,
    Project,
  },
};
</script>

<style scoped>
.content-details--left {
  display: block;
}
@media screen and (min-width: 768px) {
  .content-details--left {
    display: grid;
    grid-column-gap: var(--space-6);
    grid-template-columns: 16rem auto;
  }
}
@media screen and (min-width: 1280px) {
  .content-details--left {
    display: block;
  }
  .content-details--right {
    margin-left: var(--space-6);
  }
}
</style>
