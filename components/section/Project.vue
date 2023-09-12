<template>
  <section class="projects">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white">Projects</h3>
    <ul class="projects-list">
      <li class="projects-item projects-item--headings">
        <span>Title</span>
        <span>Links</span>
        <span>Description</span>
        <span>Technologies</span>
      </li>
      <Project :key="project.id" v-for="project in projects" :project="project" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Project as ProjectType } from '@/utils/types'

defineProps<{
  projects: Array<ProjectType>
}>()
</script>

<style>
.projects {
  margin-right: var(--space-6);
  margin-bottom: var(--space-6);
  margin-left: var(--space-6);
}

.projects-title {
  margin-bottom: var(--space-4);
}

.projects-item {
  display: grid;
  grid-column-gap: var(--space-4);
  grid-row-gap: var(--space-4);
  grid-template-columns: repeat(2, 1fr);
}

.projects-item--headings {
  display: none;
}

.projects-item--info {
  padding: var(--space-3) 0;
  font-size: 0.75rem;
}

.projects-item span:nth-child(2) {
  justify-content: end;
  justify-self: end;
}

.projects-item span:nth-child(3),
.projects-item span:nth-child(4) {
  grid-column: 1 / 3;
}

.projects-item:not(:last-child) {
  border-bottom: 1px solid var(--primary-200);
}

.projects-item-title {
  color: var(--gray-500);
  font-weight: 500;
  font-size: 0.875rem;
}

@media screen and (min-width: 640px) {
  .projects-item--headings {
    display: grid;
    padding-bottom: var(--space-3);
    color: var(--primary-400);
    font-weight: 600;
  }

  .projects-item {
    grid-template-columns: 1fr 1fr 3fr 2fr;
    align-items: center;
  }

  .projects-item-link {
    color: var(--gray-500);
    transition: var(--transition-time-base);
    font-weight: 400;
  }

  .projects-item span:nth-child(2) {
    justify-self: center;
    justify-content: center;
  }

  .projects-item span:nth-child(3) {
    grid-column: 3;
  }

  .projects-item span:nth-child(4) {
    grid-column: 4;
    text-align: right;
  }
}

@media screen and (min-width: 1280px) {
  .projects {
    margin-left: 0;
  }
}
</style>