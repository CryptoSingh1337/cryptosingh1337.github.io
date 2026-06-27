<template>
  <section class="m-8 mt-0 xl:w-64 xl:mr-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">{{ t('section.skills') }}</h3>
    <div class="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(2.5rem,_1fr))]">
      <Technology v-for="skill in technologies" :key="skill.id" :isSkill="true" :skill="skill"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {Skill} from '@/utils/types'

const {t} = useI18n()

defineProps<{
  technologies: Array<Skill>
}>()
</script>
