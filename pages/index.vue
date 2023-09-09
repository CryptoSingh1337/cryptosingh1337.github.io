<template>
  <div>
    <About :interested="interested" :stack="currentStack" />
    <Content :technologies="technologies" :projects="projects" />
  </div>
</template>

<script setup lang="ts">
import { Skill } from '@/utils/types'

const currentStackSet = new Set(['Java', 'Spring', 'Vue'])
const currentStack: Array<Skill> = []
const { data: interested } = await useFetch('/api/interested')
const { data: skills } = await useFetch('/api/technologies')
const { data: projects } = await useFetch('/api/projects')

const technologies = skills.value?.sort((a, b) => a.order - b.order)

skills.value?.forEach(skill => {
  if (currentStackSet.has(skill.name)) {
    currentStack.push(skill)
  }
})
</script>