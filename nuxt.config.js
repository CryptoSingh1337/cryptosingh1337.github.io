export default {
  target: 'static',
  head: {
    title: 'Saransh Kumar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Saransh Kumar portfolio' },
      { hid: 'og:title', name: 'og:title', content: 'Saransh Kumar portfolio' },
      { hid: 'og:url', name: 'og:url', content: 'https://saransh-kumar.online' },
      { hid: 'og:image', name: 'og:image', content: '/favicon.png' },
      { hid: 'og-type', name: 'og:type', content: 'Resume' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    bodyAttrs: {
      class: "theme--dark",
    },
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
    VUE_APP_RESUME: process.env.VUE_APP_RESUME
  },
  build: {}
}
