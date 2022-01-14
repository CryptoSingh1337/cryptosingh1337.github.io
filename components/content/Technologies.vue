<template>
  <section class="technologies">
    <h3 class="title technologies-title">Technologies and skills</h3>
    <div class="technologies-block">
      <Skill
        :key="tech.id"
        v-for="tech in technologies"
        :title="tech.title"
        :source="tech.source"
        :isSkill="true"
      />
    </div>
  </section>
</template>

<script>
import Skill from "@/components/skill/Skill.vue";

export default {
  name: "Technologies",
  components: {
    Skill,
  },
  props: {
    technologies: Array,
  },
};
</script>

<style scoped>
.technologies-title {
  margin-bottom: var(--space-4);
}
.technologies-block {
  display: grid;
  grid-column-gap: var(--space-4);
  grid-row-gap: var(--space-4);
  justify-self: center;
  grid-template-columns: repeat(auto-fill, minmax(2.5rem, 1fr));
}
@media screen and (min-width: 768px) {
  .technologies {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1280px) {
  .technologies {
    width: 16rem;
    margin-bottom: var(--space-6);
    margin-right: 0;
  }
}
</style>
