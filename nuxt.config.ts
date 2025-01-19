import { useGetPostRoutesServ, useGetPostListRoutesServ, useGetTagsRouteServ } from "./composables/useMicrocmsImpServ";

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

      const tags = await useGetTagsRouteServ(apiKey, apiEndpoint, pageLimit);
      nitroConfig.prerender?.routes?.push(...tags);
    }
  },

  app:{
    head:{
      titleTemplate: '%s - ' + process.env.SITE_TITLE,
      title: process.env.SITE_TITLE,
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.META_DESCRIPTION },
        { hid: 'theme-color', name: 'theme-color', content: '#E8E8EF'},
  
        { hid: 'og:site_name', property: 'og:site_name', content: process.env.SITE_TITLE },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: process.env.META_OG_URL },
        { hid: 'og:title', property: 'og:title', content: process.env.SITE_TITLE },
        { hid: 'og:description', property: 'og:description', content: process.env.META_DESCRIPTION },
        { hid: 'og:image', property: 'og:image', content: '/MetaOgImg.webp' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', property: 'twitter:site', content: process.env.META_TWITTER_ID }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' }
      ]
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