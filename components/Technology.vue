<template>
  <span :class="['tooltip', isSkill ? 'w-10 h-10' : 'w-6 h-6']">
    <img class="w-full h-full" :src="skill.url" :alt="skill.name" />
    <span class="tooltip-title">{{ skill.name }}</span>
  </span>
</template>

<script setup lang="ts">
import { Skill } from '@/utils/types'

defineProps<{
  skill: Skill
  isSkill: boolean
}>()
</script>
