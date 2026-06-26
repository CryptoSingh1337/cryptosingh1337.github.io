<template>
  <section class="m-8 mt-0 detail">
    <NuxtLink to="/" class="back hover:underline">&larr; {{ t('project.back') }}</NuxtLink>

    <template v-if="project">
      <div class="meta">
        <span v-if="year">{{ year }}</span>
        <span v-if="project.freelance"> &middot; {{ t('project.freelance') }}</span>
      </div>
      <h1 class="title">{{ project.title }}</h1>
      <p class="tagline">{{ project.briefInfo }}</p>

      <div v-if="project.urls.length" class="links">
        <a
          v-for="link in project.urls"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="link-pill"
          :class="{ 'is-live': link.name === 'live' }">
          {{ t(`project.links.${link.name}`) }} &#8599;
        </a>
      </div>

      <hr class="rule" />

      <h2 class="label">{{ t('project.headers.technologies') }}</h2>
      <ul class="stack">
        <li v-for="tech in project.technologies" :key="tech.name" class="chip">
          <img v-if="icon(tech.iconName ?? tech.name)" :src="icon(tech.iconName ?? tech.name)" :alt="tech.name" loading="lazy" />
          {{ tech.name }}
        </li>
      </ul>

      <template v-if="project.githubReadme">
        <h2 class="label">{{ t('project.headers.description') }}</h2>
        <a class="readme hover:underline" :href="project.githubReadme" target="_blank" rel="noopener">
          README &#8599;
        </a>
      </template>
    </template>

    <p v-else class="not-found">{{ t('project.notFound') }}</p>
  </section>
</template>

<script setup lang="ts">
import { techIcon } from '@/utils/techIcons'

const { t } = useI18n()
const route = useRoute()
const content = usePortfolioContent()

const project = computed(() => content.value.projects.find((p) => p.id === route.params.id) ?? null)

const icon = (name: string) => techIcon(name)

const year = computed(() => {
  if (!project.value?.createdAt) return ''
  const d = new Date(project.value.createdAt)
  return isNaN(d.getTime()) ? '' : String(d.getFullYear())
})
</script>

<style scoped>
.detail {
  max-width: 62rem;
}

.back {
  display: inline-block;
  margin-bottom: var(--space-5);
  color: var(--primary-400);
  font-weight: 600;
}

.meta {
  color: var(--primary-400);
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.title {
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.15;
  margin-top: var(--space-1);
}

.tagline {
  color: var(--gray-500);
  margin-top: var(--space-2);
  font-size: 1rem;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: var(--space-4);
}

.link-pill {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 1rem;
  color: #1e1e1e;
  background: var(--success-100);
  font-weight: 600;
  font-size: 0.8rem;
}

.link-pill.is-live {
  background: var(--success-200);
}

.rule {
  border: 0;
  border-top: 1px solid var(--primary-200);
  margin: var(--space-5) 0;
}

.label {
  color: var(--primary-400);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-3);
}

.stack {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(127, 127, 127, 0.14);
  border-radius: 0.6rem;
  padding: 0.4rem 0.75rem;
  font-weight: 500;
}

.chip img {
  width: 1.2rem;
  height: 1.2rem;
  object-fit: contain;
}

.readme {
  color: var(--primary-400);
  font-weight: 600;
}

.not-found {
  margin-top: var(--space-4);
  color: var(--gray-500);
}
</style>
