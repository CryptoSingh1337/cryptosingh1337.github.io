<template>
  <div>
    <About :interested="interested" :stack="currentStack"/>
    <Content :technologies="skills"/>
  </div>
</template>

<script lang="ts" setup>
import {interestedSkills, skills} from '@/utils/data'

const currentStackSet = new Set(['Java', 'Spring', 'Vue.js'])
const interested = interestedSkills
const currentStack = skills.filter(skill => currentStackSet.has(skill.name))
</script>
