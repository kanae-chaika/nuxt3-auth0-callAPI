<template>
  <div>
    <section class="login">
      <div class="flex">
        <Button>Login</Button>
        <Button>Logout</Button>
      </div>
    </section>
    <section class="api">
      <div>
        <Button>Call API</Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 1rem;
}
</style>
