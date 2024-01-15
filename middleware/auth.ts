export default defineNuxtRouteMiddleware(async () => {
  if (process.client) {
    const { $auth0 } = useNuxtApp()
    const auth0 = $auth0
    await auth0.checkSession()
    if (!auth0.isAuthenticated.value) {
      auth0.loginWithRedirect({
        appState: {
          target: useRoute().fullPath,
        },
      })
    }
  }
})
