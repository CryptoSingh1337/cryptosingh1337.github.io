<template>
  <section class="mx-8 xl:ml-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">{{ t('section.publications') }}</h3>
    <div class="divide-y divide-solid divide-primary-200">
      <Publication v-for="(publication, idx) in content.publications" :key="idx" :publication="publication"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
const {t} = useI18n()
const content = usePortfolioContent()
</script>
