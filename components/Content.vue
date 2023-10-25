<template>
  <div class="block md:flex md:flex-col xl:flex-row">
    <div class="block md:grid md:gap-x-8 md:grid-cols-[16rem_auto] xl:block">
      <Contact />
      <SectionSkill :technologies="technologies" />
      <SectionEducation class="md:hidden xl:block" />
      <SectionCertification class="hidden md:hidden xl:block" />
    </div>
    <div class="xl:ml-8">
      <SectionEducation class="hidden md:block xl:hidden" />
      <SectionExperience />
      <SectionProject :projects="projects" />
      <SectionCertification class="md:block xl:hidden" />
      <SectionPublication />
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
