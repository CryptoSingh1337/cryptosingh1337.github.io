<template>
  <section class="technologies">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white">Technologies and skills</h3>
    <div class="technologies-block">
      <Technology :key="skill.id" v-for="skill in technologies" :skill="skill" :isSkill="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Skill } from '@/utils/types'

defineProps<{
  technologies: Array<Skill>
}>()
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