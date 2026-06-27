<template>
  <div class="md-view">
    <zero-md v-show="rendered" :src="src" @zero-md-rendered="onRendered" />

    <div v-if="!rendered && !failed" class="md-skeleton" aria-hidden="true">
      <span v-for="n in 6" :key="n" class="md-skeleton-line"></span>
    </div>

    <a
      v-if="failed && !rendered"
      :href="src"
      target="_blank"
      rel="noopener"
      class="md-fallback hover:underline">
      {{ t('project.readmeUnavailable') }} &#8599;
    </a>
  </div>
</template>

<script setup lang="ts">
// The themed <zero-md> element is registered in plugins/zero-md.client.ts.
const props = defineProps<{ src: string }>()
const { t } = useI18n()

const rendered = ref(false)
const failed = ref(false)
let watchdog: ReturnType<typeof setTimeout> | null = null

function armWatchdog() {
  if (watchdog) clearTimeout(watchdog)
  // If nothing rendered in time (offline / CDN blocked / src 404), offer a link.
  // Generous, since zero-md lazy-loads its parser from the CDN on first view.
  watchdog = setTimeout(() => { if (!rendered.value) failed.value = true }, 30000)
}

function onRendered() {
  if (watchdog) { clearTimeout(watchdog); watchdog = null }
  failed.value = false
  rendered.value = true
}

onMounted(armWatchdog)

watch(() => props.src, () => {
  rendered.value = false
  failed.value = false
  armWatchdog()
})

onBeforeUnmount(() => {
  if (watchdog) clearTimeout(watchdog)
})
</script>

<style scoped>
.md-skeleton {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.md-skeleton-line {
  height: 0.85rem;
  border-radius: 0.3rem;
  background: linear-gradient(90deg, rgba(127, 127, 127, 0.10) 25%, rgba(127, 127, 127, 0.22) 37%, rgba(127, 127, 127, 0.10) 63%);
  background-size: 400% 100%;
  animation: md-shimmer 1.4s ease infinite;
}

.md-skeleton-line:nth-child(3n) { width: 70%; }
.md-skeleton-line:nth-child(4n) { width: 85%; }

@keyframes md-shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

.md-fallback {
  display: inline-block;
  color: var(--primary-400);
  font-weight: 600;
}
</style>
