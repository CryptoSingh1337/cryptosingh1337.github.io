<template>
  <div class="content-details">
    <div class="content-details--left">
      <Contact />
      <SectionSkill :technologies="technologies" />
      <Education />
      <SectionCertification />
    </div>
    <div class="content-details--right">
      <SectionExperience />
      <SectionProject :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project, Skill } from '@/utils/types'

defineProps<{
  technologies: Array<Skill>,
  projects: Array<Project>
}>()
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