export const useAuth = () => {
  const { $auth0 } = useNuxtApp()
  const auth0 = $auth0

  const isAuthLoading = computed(() => {
    return auth0?.isLoading.value
  })

  const isAuthenticated = computed(() => {
    return auth0?.isAuthenticated.value
  })

  const user = computed(() => {
    return auth0?.user.value
  })

  const loginWithRedirect = () => {
    auth0?.checkSession()
    if (!auth0?.isAuthenticated.value) {
      auth0?.loginWithRedirect({
        appState: {
          target: useRoute().fullPath,
        },
      })
    }
  }

  const signupWithRedirect = () => {
    auth0?.checkSession()
    if (!auth0?.isAuthenticated.value) {
      auth0?.loginWithRedirect({
        appState: {
          target: useRoute().fullPath,
        },
        authorizationParams: {
          screen_hint: 'signup',
        },
      })
    }
  }

  const clearTaken = () => {
    Object.keys(localStorage).forEach((key) => {
      if (key.indexOf('@@auth0spajs@@') !== -1) {
        console.log('key', key)
        localStorage.removeItem(key)
      }
    })
  }

  const logout = () => {
    clearTaken()
    auth0?.logout({ logoutParams: { returnTo: window.location.origin } })
  }

  const getAccessTokenSilently = () => auth0?.getAccessTokenSilently()

  return {
    isAuthLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    signupWithRedirect,
    logout,
    getAccessTokenSilently,
  }
}
