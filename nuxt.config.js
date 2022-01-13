export default {
  head: {
    title: 'Saransh Kumar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Saransh Kumar portfolio' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:title', content: 'Saransh Kumar portfolio' },
      { name: 'og:url', content: 'https://saransh-kumar.online' },
      { name: 'og:image', content: '/favicon.png' },
      { name: 'og:type', content: 'Resume' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '@/assets/styles.css'
  ],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios'
  ],
  env: {
    VUE_APP_ACCESS_TOKEN: process.env.VUE_APP_ACCESS_TOKEN,
    VUE_APP_ENDPOINT: process.env.VUE_APP_ENDPOINT,
    VUE_APP_REF: process.env.VUE_APP_REF,
    VUE_APP_RESUME: process.env.VUE_APP_RESUME,
  },
  build: {}
}
