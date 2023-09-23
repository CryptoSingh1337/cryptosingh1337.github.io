<template>
  <section class="m-8 mt-0 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">Projects</h3>
    <ul class="pl-0">
      <div class="sm:divide-y divide-solid divide-primary-200">
        <li class="hidden sm:grid gap-4 grid-cols-[1fr_1fr_3fr_2fr] items-center pb-3 text-primary-400 font-semibold">
          <span>Title</span>
          <span class="text-center">Links</span>
          <span class="sm:col-[3]">Description</span>
          <span class="sm:col-[4] text-right">Technologies</span>
        </li>
        <div class="divide-y divide-solid divide-primary-200">
          <Project :key="project.id" v-for="project in projects" :project="project" />
        </div>
      </div>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Project as ProjectType } from '@/utils/types'

defineProps<{
  projects: Array<ProjectType>
}>()
</script>
