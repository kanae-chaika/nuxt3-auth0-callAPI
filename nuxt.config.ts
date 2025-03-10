// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/style.scss'],

  typescript: {
    shim: false,
    strict: true,
  },

  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/global" as g;',
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      auth0Domain: '',
      auth0ClientId: '',
      auth0Audience: '',
      apiHost: '',
    },
  },

  compatibilityDate: '2025-02-07',
})