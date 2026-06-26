<template>
  <section class="m-8 mt-0 xl:w-64 xl:mr-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">{{ t('section.education') }}</h3>
    <ul class="pl-0 hidden md:block xl:hidden">
      <div class="sm:divide-y divide-solid divide-primary-200">
        <li class="grid gap-4 grid-cols-[1fr_2fr_1fr_2fr_1fr] items-center pb-3 text-primary-400 font-semibold">
          <span>{{ t('education.headers.duration') }}</span>
          <span class="text-center">{{ t('education.headers.name') }}</span>
          <span class="text-center">{{ t('education.headers.degree') }}</span>
          <span class="text-center">{{ t('education.headers.fieldOfStudy') }}</span>
        </li>
        <div class="divide-y divide-solid divide-primary-200">
          <Education :key="idx" v-for="(education, idx) in content.educations" :education="education" :show-table="true" />
        </div>
      </div>
    </ul>
    <Education class="md:hidden xl:block" :key="idx" v-for="(education, idx) in content.educations" :education="education"
      :show-table="false" />
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const content = usePortfolioContent()
</script>
