<template>
  <li class="projects-item projects-item--info">
    <span class="projects-item-title">{{ project.title }}</span>
    <span class="projects-item-preview">
      <a :key="idx" v-for="(url, idx) in project.urls" :href="url.url" target="_blank">
        <span :class="url.name === 'live' ? 'projects-item-live' : 'projects-item-repo'">{{ url.name }}</span>
      </a>
    </span>
    <span>{{ project.briefInfo }}</span>
    <span>{{ technologiesUsed }}</span>
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

<style scoped>
.project-link {
  color: var(--gray-500);
}

.projects-item--info {
  padding: var(--space-3) 0;
  font-size: 0.75rem;
}

.projects-item-live,
.projects-item-repo {
  padding: 0 var(--space-2);
  color: var(--gray-900);
  border-radius: var(--space-2);
  margin: var(--space-1);
}

.projects-item-repo {
  background-color: var(--success-100);
}

.projects-item-live {
  background-color: var(--success-200);
}

.projects-item-preview {
  display: flex;
  flex-wrap: wrap;
}

.projects-item-preview a {
  color: var(--gray-900);
  /* transition: var(--transition-time-base); */
}
</style>