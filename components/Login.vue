<template>
  <section class="login">
    <div class="flex">
      <Button @cliick="login">Login</Button>
      <Button>Logout</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const login = () => {}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 1rem;
}
</style>
