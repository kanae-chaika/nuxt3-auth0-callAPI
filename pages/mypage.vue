<template>
  <div>
    <Nav>Mypage</Nav>
    <p class="lead">This page is only displayed while logged in.</p>

    <Login />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<style lang="scss" scoped>
.lead {
  margin-bottom: 2rem;
  text-align: center;
}
</style>
