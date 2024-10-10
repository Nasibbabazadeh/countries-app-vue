export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:["assets/css/main.css"],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss:{
    cssPath: '~/assets/css/main.css'
  },
  runtimeConfig: {
    public: {
      baseUrl:  process.env.BASE_URL || 'https://date.nager.at/api/v3'
    }
  },
})