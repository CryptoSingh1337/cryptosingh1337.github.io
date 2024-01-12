<template>
  <li class="py-3 px-0 text-xs grid gap-4 grid-cols-[repeat(2,_1fr)] sm:grid-cols-[1fr_1fr_3fr_2fr] sm:items-center">
    <span class="font-medium text-sm">{{ project.title }}</span>
    <span
      class="flex sm:flex-col flex-wrap items-end self-end justify-end justify-self-end sm:items-center sm:self-center sm:justify-center sm:justify-self-center">
      <a class="text-black hover:underline p-1" v-if="project.urls.length > 0" :key="idx"
        v-for="(url, idx) in project.urls" :href="url.url" target="_blank">
        <span :class="['px-2 rounded-lg duration-700', url.name === 'live' ? 'bg-success-200' : 'bg-success-100']">
          {{ url.name }}
        </span>
      </a>
      <span v-if="project.freelance" class="text-black text-muted px-2 rounded-lg duration-700 bg-success-100">
        freelance
      </span>
    </span>
    <span class="col-[1/3] sm:col-[3]">{{ project.briefInfo }}</span>
    <span class="col-[1/3] sm:col-[4] sm:text-right">{{ technologiesUsed }}</span>
  </li>
</template>

<script setup lang="ts">
import { Project } from '@/utils/types';

const props = defineProps<{
  project: Project
}>()

let technologiesUsed = ''
for (let i = 0; i < props.project.technologies.length; i++) {
  if (i === props.project.technologies.length - 1) {
    technologiesUsed += props.project.technologies[i]
  } else {
    technologiesUsed += props.project.technologies[i] + ', '
  }
}
</script>
