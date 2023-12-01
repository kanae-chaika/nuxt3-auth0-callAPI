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

  // Only add if client-side
  if (process.client) {
    nuxtApp.vueApp.use(auth0)
  }

  addRouteMiddleware('auth', () => {
    console.log('addRouteMiddleware')

    if (process.client) {
      auth0.checkSession()
      console.log('auth0.isAuthenticated.value', auth0.isAuthenticated.value)
      if (!auth0.isAuthenticated.value) {
        auth0.loginWithRedirect({
          appState: {
            target: useRoute().fullPath,
          },
        })
      }
    }
  })
})
