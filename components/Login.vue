<template>
  <section class="login">
    <div class="flex">
      <ClientOnly>
        <Button v-if="isAuthenticated" @click="logout">Logout</Button>
        <Button v-else @click="login">Login</Button>
      </ClientOnly>
    </div>
  </section>
  <section class="user_data">
    <h2 class="title">Auth0 Login Data</h2>
    <ClientOnly>
      <div v-if="user" class="user_data_content">
        <div v-if="user?.picture" class="img_wrap"><img :src="user?.picture" /></div>
        <div class="txt_wrap">
          <template v-for="(value, key) in user">
            <p>{{ key }} : {{ value }}</p>
          </template>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const auth0 = process.client ? useAuth0() : undefined

const isAuthenticated = computed(() => {
  return auth0?.isAuthenticated.value
})

const user = computed(() => {
  return auth0?.user.value
})

const login = () => {
  auth0?.checkSession()
  if (!auth0?.isAuthenticated.value) {
    auth0?.loginWithRedirect({
      appState: {
        target: useRoute().path,
      },
    })
  }
}
const logout = () => {
  auth0?.logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 1rem;
}
.user_data {
  margin: 0 0 3rem;
}
.user_data_content {
  display: flex;
  gap: 1rem;
  .img_wrap {
    max-width: 120px;
  }
}
</style>
