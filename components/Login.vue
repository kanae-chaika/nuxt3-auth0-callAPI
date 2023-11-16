<template>
  <section class="login">
    <div class="flex">
      <Button v-if="isAuthenticated" @click="logout">Logout</Button>
      <Button v-else @click="login">Login</Button>
    </div>
  </section>
  <section class="user_data">
    <h2 class="title">Login Data</h2>
    <div v-if="user" class="user_data_content">
      <div v-if="user?.picture" class="img_wrap"><img :src="user?.picture" /></div>
      <div class="txt_wrap">
        <p>{{ user?.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

const auth0 = process.client ? useAuth0() : undefined
const isAuthenticated = ref(false)

watch(auth0?.isAuthenticated, async () => {
  if (auth0?.isAuthenticated.value) isAuthenticated.value = true
})
const user = computed(() => {
  console.log('auth0?.user.value', auth0?.user.value)
  return auth0?.user.value
})

const login = () => {
  console.log('click login')
  console.log('auth0', auth0)
  auth0?.checkSession()
  if (!auth0?.isAuthenticated.value) {
    auth0?.loginWithRedirect()
  }
}
const logout = () => {
  // navigateTo('/')
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
