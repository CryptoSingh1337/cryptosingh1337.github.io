<template>
  <section class="detail">
    <NuxtLink class="back hover:underline" to="/">&larr; {{ t('project.back') }}</NuxtLink>

    <template v-if="project">
      <header class="hero">
        <div class="kicker">
          <span v-if="year">{{ year }}</span>
          <span v-if="project.freelance" class="freelance">{{ t('project.freelance') }}</span>
        </div>
        <h1 class="title">{{ project.title }}</h1>
        <p class="tagline">{{ project.briefInfo }}</p>

        <div v-if="project.urls.length" class="links">
          <a
            v-for="link in project.urls"
            :key="link.name"
            :class="{ 'is-primary': link.name === 'live' || link.name === 'demo' }"
            :href="link.url"
            class="link-pill"
            rel="noopener"
            target="_blank">
            {{ t(`project.links.${link.name}`) }} &#8599;
          </a>
        </div>
      </header>

      <div class="layout">
        <aside class="aside">
          <div class="card">
            <h2 class="label">{{ t('project.headers.technologies') }}</h2>
            <ul class="stack">
              <li v-for="tech in project.technologies" :key="tech.name" class="chip">
                <img v-if="techIcon(tech.iconName ?? tech.name)" :alt="tech.name"
                     :src="techIcon(tech.iconName ?? tech.name)" loading="lazy"/>
                {{ tech.name }}
              </li>
            </ul>
          </div>
        </aside>

        <main class="main">
          <h2 class="label">{{ t('project.overview') }}</h2>
          <MarkdownView v-if="project.githubReadme" :key="project.id" :src="project.githubReadme"/>
          <p v-else class="readme-empty">{{ t('project.noReadme') }}</p>
        </main>
      </div>
    </template>

    <p v-else class="not-found">{{ t('project.notFound') }}</p>
  </section>
</template>

<script lang="ts" setup>
import {techIcon} from '@/utils/techIcons'
import {projectYear} from '@/utils/data'

const {t} = useI18n()
const route = useRoute()
const content = usePortfolioContent()

const project = computed(() => content.value.projects.find((p) => p.id === route.params.id) ?? null)
const year = computed(() => projectYear(project.value?.createdAt))
</script>

<style scoped>
.detail {
  /* width:100% keeps the column from collapsing to its content width inside the
     flex-column layout (auto margins otherwise cancel the flex stretch). */
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: var(--space-6) var(--space-4) var(--space-6);
}

.back {
  display: inline-block;
  margin-bottom: var(--space-6);
  color: var(--primary-400);
  font-weight: 600;
}

/* ---------- Hero ---------- */
.hero {
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--primary-200);
}

.kicker {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--primary-400);
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.freelance {
  padding: 0.1rem 0.5rem;
  border: 1px solid var(--primary-300);
  border-radius: 1rem;
  letter-spacing: 0.04em;
}

.title {
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.1;
  margin-top: var(--space-2);
  color: var(--dark);
}

.tagline {
  color: var(--gray-500);
  margin-top: var(--space-3);
  font-size: 1.05rem;
  line-height: 1.6rem;
  max-width: 46rem;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: var(--space-5);
}

.link-pill {
  display: inline-block;
  padding: 0.4rem 0.95rem;
  border-radius: 1rem;
  border: 1px solid var(--primary-300);
  color: var(--primary-400);
  font-weight: 600;
  font-size: 0.8rem;
  transition: background var(--transition-time-base), color var(--transition-time-base), transform var(--transition-time-base);
}

.link-pill:hover {
  transform: translateY(-1px);
  background: var(--primary-100);
}

.link-pill.is-primary {
  background: var(--primary-500);
  border-color: var(--primary-500);
  color: #1e1e1e;
}

.link-pill.is-primary:hover {
  background: var(--primary-400);
  border-color: var(--primary-400);
}

/* ---------- Layout ---------- */
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.aside {
  min-width: 0;
}

.card {
  border: 1px solid var(--primary-200);
  border-radius: 0.8rem;
  padding: var(--space-4);
}

.label {
  color: var(--primary-400);
  font-weight: 700;
  font-size: 0.8rem;
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
  gap: 0.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(127, 127, 127, 0.14);
  border-radius: 0.6rem;
  padding: 0.35rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--dark);
}

.chip img {
  width: 1.15rem;
  height: 1.15rem;
  object-fit: contain;
}

.main {
  min-width: 0;
}

@media screen and (min-width: 900px) {
  .layout {
    grid-template-columns: minmax(0, 1fr) 17rem;
    align-items: start;
  }

  /* README first, tech sidebar on the right */
  .main {
    order: 1;
  }

  .aside {
    order: 2;
  }

  .card {
    position: sticky;
    top: var(--space-5);
  }
}

/* ---------- Empty / fallback states ---------- */
.readme-empty,
.not-found {
  color: var(--gray-500);
}

</style>
