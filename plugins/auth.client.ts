import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const auth0 = createAuth0({
    domain: config.public.auth0Domain,
    clientId: config.public.auth0ClientId,
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: config.public.auth0Audience,
    },
    cacheLocation: 'localstorage',
    useRefreshTokens: false,
  })

  nuxtApp.vueApp.use(auth0)

  return {
    provide: {
      auth0,
    },
  }
})
