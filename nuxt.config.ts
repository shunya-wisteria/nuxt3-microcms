// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ["nuxt-microcms-module", "vuetify-nuxt-module", "@nuxtjs/google-fonts"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },

  vuetify: {
    vuetifyOptions: 'vuetify.config.ts'
  },

  googleFonts: {
    families: {
      'Open Sans': true,
      'Rounded Mplus 1c': true,
      'Roboto': true
    }
  },

  // experimental: { payloadExtraction: false, },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  runtimeConfig:{
    public:{
      pageLimit: process.env.PAGE_LIMIT
    }
  }
})