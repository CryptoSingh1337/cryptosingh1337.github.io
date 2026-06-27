<template>
  <span :class="['tooltip', isSkill ? 'w-10 h-10' : 'w-6 h-6']">
    <img :alt="skill.name" :src="skill.url" class="w-full h-full"/>
    <span class="tooltip-title">{{ skill.name }}</span>
  </span>
</template>

<script lang="ts" setup>
import {Skill} from '@/utils/types'

defineProps<{
  skill: Skill
  isSkill: boolean
}>()
</script>
