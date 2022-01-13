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
    VUE_APP_ACCESS_TOKEN: process.env.VUE_APP_ACCESS_TOKEN || "MC5ZU2RSbEJNQUFDa0FJNXFu.77-9BCLvv73vv73vv71877-977-9EUXvv70277-9E--_ve-_ve-_vTDvv70eKO-_ve-_ve-_ve-_vRrvv73vv73vv70FOA",
    VUE_APP_ENDPOINT: process.env.VUE_APP_ENDPOINT || "https://saransh-kumar.prismic.io/api/v2/",
    VUE_APP_REF: process.env.VUE_APP_REF || "YcQ6kBIAACgAYUfj",
    VUE_APP_RESUME: process.env.VUE_APP_RESUME || "https://github.com/CryptoSingh1337/cryptosingh1337.github.io/raw/master/src/assets/resume/SaranshKumar-Resume.pdf"
  },
  build: {}
}
