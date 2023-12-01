<template>
  <section class="login">
    <div class="flex">
      <ClientOnly>
        <Button v-if="isAuthenticated" @click="logout">Logout</Button>
        <template v-else>
          <Button @click="loginWithRedirect">Login</Button>
          <Button @click="signupWithRedirect">Sign Up</Button>
        </template>
      </ClientOnly>
    </div>
  </section>
  <section class="auth_data">
    <div class="auth_data_content">
      <h2 class="title">Auth0 Condition</h2>
      <ClientOnly>
        <p>isAuthLoading : {{ isAuthLoading }}</p>
        <p>isAuthenticated : {{ isAuthenticated }}</p>
      </ClientOnly>
    </div>
    <div class="auth_data_content">
      <h2 class="title">Auth0 User Data</h2>
      <ClientOnly>
        <div v-if="user" class="user_data">
          <div v-if="user?.picture" class="img_wrap"><img :src="user?.picture" /></div>
          <div class="txt_wrap">
            <template v-for="(value, key) in user">
              <p>{{ key }} : {{ value }}</p>
            </template>
          </div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isAuthLoading, isAuthenticated, user, loginWithRedirect, signupWithRedirect, logout } =
  useAuth()
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 1rem;
}
.auth_data_content {
  margin: 0 0 3rem;
}
.user_data {
  display: flex;
  gap: 1rem;
  .img_wrap {
    max-width: 120px;
  }
}
</style>
