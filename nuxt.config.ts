import { useGetPostRoutesServ, useGetPostListRoutesServ } from "./composables/useMicrocmsImpServ";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  hooks:{
    async 'nitro:config'(nitroConfig) {
      // 動的ルーティングのプリレンダリング設定
      const apiKey:string = process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY : "";
      const apiEndpoint:string = process.env.MICROCMS_API_ENDPOINT ? process.env.MICROCMS_API_ENDPOINT : "";
      const pageLimit:number = Number(process.env.PAGE_LIMIT) > 0 ? Number(process.env.PAGE_LIMIT) : 1;

      const slugs = await useGetPostRoutesServ(apiKey, apiEndpoint);
      nitroConfig.prerender?.routes?.push(...slugs);

      const postList = await useGetPostListRoutesServ(apiKey, apiEndpoint, pageLimit);
      nitroConfig.prerender?.routes?.push(...postList);
    }
  },

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