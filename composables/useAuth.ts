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

  const checkAndRedirect = async (target?: string, options = {}) => {
    try {
      // サイレント認証でトークンを取得 → ログイン済
      await auth0.getAccessTokenSilently()
    } catch (error) {
      console.error('Silent authentication failed:', error)
      // サイレント認証が失敗した場合リダイレクトでログイン
      auth0?.loginWithRedirect({
        appState: { target: target || useRoute().fullPath },
        ...options,
      })
    }
  }

  const loginWithRedirect = async (target?: string) => {
    await checkAndRedirect(target)
  }

  const signupWithRedirect = async () => {
    await checkAndRedirect(undefined, { authorizationParams: { screen_hint: 'signup' } })
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
