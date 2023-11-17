<template>
  <div>
    <Nav>Top Page</Nav>
    <Login />
    <section class="api">
      <div>
        <Button @click="callApi">Call API</Button>
      </div>

      <div class="result-block-container">
        <div>
          <h2 class="muted">Result</h2>
          <p>{{ JSON.stringify(apiMessage, null, 2) }}</p>
          <p>{{ JSON.stringify(errorMessage, null, 2) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
// import axios from 'axios'
const auth0 = process.client ? useAuth0() : undefined
const config = useRuntimeConfig()
const apiMessage = ref()
const errorMessage = ref()

const callApi = async () => {
  const accessToken = await auth0?.getAccessTokenSilently()
  // console.log('accessToken', accessToken)
  const url = config.public.apiHost + '/v1/users/me'

  const { data, error } = await useFetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    async onResponse({ request, response }) {
      console.log('onResponse log', request, response.status)
    },
  })
  if (data.value) apiMessage.value = data.value
  if (error.value) apiMessage.value = error.value
}
</script>

<style lang="scss" scoped></style>
