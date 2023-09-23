<template>
  <section class="m-8 mt-0 md:mb-0 xl:w-64 xl:mb-8 xl:mr-0">
    <h3 class="mb-4 font-bold text-lg text-black dark:text-white duration-700">Technologies and skills</h3>
    <div class="grid gap-4 justify-self-center grid-cols-[repeat(auto-fill,_minmax(2.5rem,_1fr))]">
      <Technology :key="skill.id" v-for="skill in technologies" :skill="skill" :isSkill="true" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Skill } from '@/utils/types'

defineProps<{
  technologies: Array<Skill>
}>()
</script>
