<template>
  <div class="block md:flex md:flex-col xl:flex-row">
    <div class="block md:grid md:grid-x-8 md:grid-cols-[16rem_auto] xl:block">
      <Contact />
      <SectionSkill :technologies="technologies" />
      <Education />
      <SectionCertification />
    </div>
    <div class="xl:ml-8">
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
