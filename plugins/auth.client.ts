import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()

  const auth0 = await createAuth0({
    domain: config.public.auth0CustomDomain,
    clientId: config.public.auth0ClientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: config.public.auth0Audience,
    },
    cacheLocation: 'localstorage',
    useRefreshTokens: false,
  })

  // Only add if client-side
  if (process.client) {
    nuxtApp.vueApp.use(auth0)
  }

  return {
    provide: {
      auth0,
    },
  }
})
