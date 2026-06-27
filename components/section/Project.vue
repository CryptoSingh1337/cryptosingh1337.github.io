<template>
  <section class="m-8 mt-0 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">{{ t('section.projects') }}</h3>
    <div>
      <Project v-for="project in content.projects" :key="project.id" :project="project"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
const {t} = useI18n()
const content = usePortfolioContent()
</script>
