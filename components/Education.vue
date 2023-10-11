<template>
  <p v-if="!showTable" class="grid gap-y-4 mb-8 xl:grid-cols-[16rem]">
    <span class="inline-block text-primary-400 font-semibold">
      {{ education.institute }}
      <br />
      ({{ education.duration }})
    </span>
    <span class="grid grid-cols-[max-content]">
      <span class="inline-block text-primary-400 font-semibold">
        Degree:
      </span>
      {{ education.degree }}
    </span>
    <span class="grid grid-cols-[max-content]">
      <span class="inline-block text-primary-400 font-semibold">
        Field Of Study:
      </span>
      {{ education.fieldOfStudy }}
    </span>
    <span class="grid grid-cols-[max-content]">
      <span class="inline-block text-primary-400 font-semibold">
        Grade:
      </span>
      {{ education.grade }}
    </span>
  </p>
  <li v-else class="grid py-3 px-0 gap-4 grid-cols-[1fr_2fr_1fr_2fr_1fr] items-center">
    <span>{{ education.duration }}</span>
    <span class="text-center">{{ education.institute }}</span>
    <span class="text-center">{{ education.degree }}</span>
    <span class="text-center">{{ education.fieldOfStudy }}</span>
    <span class="text-right">{{ education.grade }}</span>
  </li>
</template>

<script lang="ts" setup>
import { Education } from '@/utils/types'
defineProps<{
  education: Education,
  showTable: Boolean
}>()
</script>
