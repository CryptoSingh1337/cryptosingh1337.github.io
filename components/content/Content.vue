<template>
  <div class="content-details">
    <div class="content-details--left">
      <Contact />
      <Technologies :technologies="technologies" />
      <Education />
    </div>
    <div class="content-details--right">
      <Experience />
      <Project :projects="projects" />
    </div>
  </div>
</template>

<script>
import Contact from "@/components/content/Contact.vue";
import Technologies from "@/components/content/Technologies.vue";
import Education from "@/components/content/Education.vue";
import Experience from "@/components/content/Experience.vue";
import Project from "@/components/content/Project.vue";

export default {
  name: "Content",
  components: {
    Contact,
    Technologies,
    Education,
    Experience,
    Project,
  },
  props: {
    technologies: Array,
    projects: Array,
  },
};
</script>

<style>
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
