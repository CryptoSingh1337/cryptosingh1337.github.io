<template>
  <section class="work-experience">
    <h3 class="work-experience-title">Work Experience</h3>
    <div class="work-experience--branches">
      <ExperienceBlock />
    </div>
  </section>
</template>

<script>
import ExperienceBlock from "./ExperienceBlock.vue";

export default {
  name: "Experience",
  components: {
    ExperienceBlock,
  },
};
</script>

<style scoped>
.work-experience {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}
.work-experience-title {
  margin-bottom: var(--space-4);
}
.work-experience--branches {
  position: relative;
  padding-right: var(--space-2);
}
.work-experience--branches::after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  left: auto;
  width: 8px;
  height: 100%;
  background: var(--primary-300);
}
@media screen and (min-width: 640px) {
  .work-experience--branches {
    display: grid;
    grid-column-gap: 8px;
    grid-template-columns: 50% 50%;
    padding-right: 0;
  }
  .work-experience--branches::after {
    right: 50%;
    left: 50%;
  }
}
@media screen and (min-width: 1280px) {
  .work-experience {
    margin-left: 0;
  }
}
</style>
