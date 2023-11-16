<template>
  <div>
    <Nav />
    <Login />
    <h1>Top Page</h1>
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
  console.log('accessToken', accessToken)
  const url = config.public.apiHost + '/v1/users/me'
  // const url = config.public.apiHost + '/v1/master/categories'

  const { data, error } = await useFetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    async onResponse({ request, response, options }) {
      console.log('onResponse log1', request, response.status)
      for (const header of response.headers.entries()) {
        console.log('onResponse HEADER', header)
      }
    },
  })
  if (data.value) apiMessage.value = data.value
  if (error.value) apiMessage.value = error.value

  // try {
  //   const response = await axios.get(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //   const data = await response.data
  //   apiMessage.value = data
  // } catch (e: any) {
  //   apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
  // }

  // try {
  //   const response = await fetch(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   })
  //   const data = await response.json()
  //   apiMessage.value = data
  // } catch (e: any) {
  //   apiMessage.value = `Error: the server responded with '${e.response.status}: ${e.response.statusText}'`
  // }
}
</script>

<style lang="scss" scoped></style>
