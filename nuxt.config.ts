export default defineNuxtConfig({
  ssr: true,

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  runtimeConfig: {
    public: {
      resume: process.env.RESUME
    }
  },

  app: {
    head: {
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ]
    }
  },

  css: [
    '@/assets/styles.css'
  ],

  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/robots'],

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-GB', file: 'en.json', name: 'English' },
      { code: 'de', language: 'de-DE', file: 'de.json', name: 'Deutsch' }
    ],
    vueI18n: './i18n.config.ts'
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  site: {
    indexable: false
  },

  robots: {
    disallow: ['*']
  },

  compatibilityDate: '2024-10-05'
})
