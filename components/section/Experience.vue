<template>
  <section class="m-8 mt-0 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">{{ t('section.experience') }}</h3>
    <div>
      <Experience :key="idx" v-for="(company, idx) in content.workExperience" :company="company" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const content = usePortfolioContent()
</script>
