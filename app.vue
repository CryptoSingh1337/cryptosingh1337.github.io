<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value
  }
}))

useSeoMeta(() => ({
  title: t('seo.title'),
  description: t('seo.description'),
  ogTitle: t('seo.title'),
  ogDescription: t('seo.description'),
  ogUrl: 'https://saranshkumar.me/',
  ogImage: '/favicon.png',
  ogType: 'website'
}))
</script>
