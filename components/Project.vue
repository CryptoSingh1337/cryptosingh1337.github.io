<template>
  <NuxtLink class="proj" :to="`/project/${project.id}`">
    <div class="proj-head">
      <span class="proj-title">{{ project.title }}</span>
      <span v-if="year" class="proj-year">{{ year }}</span>
    </div>
    <p class="proj-brief">{{ project.briefInfo }}</p>
    <div class="proj-foot">
      <ul class="proj-tech">
        <li v-for="tech in project.technologies" :key="tech.name" class="chip">
          <img v-if="icon(tech.iconName ?? tech.name)" :src="icon(tech.iconName ?? tech.name)" :alt="tech.name" loading="lazy" />
          {{ tech.name }}
        </li>
      </ul>
      <span class="proj-more">{{ t('project.viewDetails') }} &rarr;</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Project } from '@/utils/types'
import { techIcon } from '@/utils/techIcons'

const { t } = useI18n()

const props = defineProps<{
  project: Project
}>()

const icon = (name: string) => techIcon(name)

const year = computed(() => {
  if (!props.project.createdAt) return ''
  const d = new Date(props.project.createdAt)
  return isNaN(d.getTime()) ? '' : String(d.getFullYear())
})
</script>

<style scoped>
.proj {
  display: block;
  padding: var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--primary-200);
  color: inherit;
  text-decoration: none;
  transition: background var(--transition-time-base), box-shadow var(--transition-time-base);
}

.proj:hover {
  background: rgba(127, 127, 127, 0.08);
  box-shadow: inset 3px 0 0 var(--primary-400);
}

.proj-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-2);
}

.proj-title {
  font-weight: 700;
  font-size: 1.05rem;
}

.proj-year {
  color: var(--primary-400);
  font-weight: 600;
  font-size: 0.75rem;
  white-space: nowrap;
}

.proj-brief {
  margin: var(--space-1) 0 0;
  color: var(--gray-500);
  font-size: 0.85rem;
  line-height: 1.2rem;
  max-width: 48rem;
}

.proj-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-top: var(--space-3);
}

.proj-tech {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  align-items: center;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(127, 127, 127, 0.14);
  border-radius: 0.45rem;
  padding: 0.25rem 0.6rem 0.25rem 0.42rem;
  font-size: 0.78rem;
}

.chip img {
  width: 1.1rem;
  height: 1.1rem;
  object-fit: contain;
}

.proj-more {
  color: var(--primary-400);
  font-weight: 600;
  font-size: 0.78rem;
  white-space: nowrap;
}
</style>
