<template>
  <nav class="nav">
    <ul class="flex">
      <li><NuxtLink to="/index">TOP</NuxtLink></li>
      <li><NuxtLink to="/about">about</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  margin: 0 0 2rem;
}
.flex {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
