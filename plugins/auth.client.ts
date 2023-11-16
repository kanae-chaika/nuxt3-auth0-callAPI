import { createAuth0 } from '@auth0/auth0-vue'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const auth0 = createAuth0({
    domain: runtimeConfig.public.authDomain,
    clientId: runtimeConfig.public.authClientId,
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })

  // Only add if client-side
  if (process.client) {
    nuxtApp.vueApp.use(auth0)
  }

  addRouteMiddleware('auth', () => {
    if (process.client) {
      auth0.checkSession()
      if (!auth0.isAuthenticated.value) {
        auth0.loginWithRedirect({
          appState: {
            target: useRoute().path,
          },
        })
      }
    }
  })
})
