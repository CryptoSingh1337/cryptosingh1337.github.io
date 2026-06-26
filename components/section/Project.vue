<template>
  <section class="m-8 mt-0 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">{{ t('section.projects') }}</h3>
    <ul class="pl-0">
      <div class="sm:divide-y divide-solid divide-primary-200">
        <li class="hidden sm:grid gap-4 grid-cols-[1fr_1fr_3fr_2fr] items-center pb-3 text-primary-400 font-semibold">
          <span>{{ t('project.headers.title') }}</span>
          <span class="text-center">{{ t('project.headers.links') }}</span>
          <span class="sm:col-[3]">{{ t('project.headers.description') }}</span>
          <span class="sm:col-[4] text-right">{{ t('project.headers.technologies') }}</span>
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

const { t } = useI18n()

defineProps<{
  projects: Array<ProjectType>
}>()
</script>
