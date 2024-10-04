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
      title: 'Saransh',
      meta: [
        { property: 'description', name: 'description', content: 'Portfolio of Saransh Kumar' },
        { property: 'og:title', name: 'og:title', content: 'Saransh' },
        { property: 'og:url', name: 'og:url', content: 'https://saranshkumar.me/' },
        { property: 'og:image', name: 'og:image', content: '/favicon.png' },
        { property: 'og:description', name: 'og:description', content: 'Portfolio of Saransh Kumar' },
        { property: 'og:type', name: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ]
    }
  },

  css: [
    '@/assets/styles.css'
  ],

  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@nuxtjs/robots'],

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