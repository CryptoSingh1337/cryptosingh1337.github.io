<template>
  <span :class="['icon', 'tooltip', isSkill ? 'icon-size-x2h' : 'icon-size-x1h']">
    <img :src="skill.url" :alt="skill.name" />
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

<style scoped>
span {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
}

.icon-size-x1h {
  width: 1.5rem;
  height: 1.5rem;
}

.icon-size-x2h {
  width: 2.5rem;
  height: 2.5rem;
}
</style>