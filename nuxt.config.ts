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
      authDomain: '',
      authClientId: '',
      authAudience: '',
      apiHost: '',
    },
  },
})
