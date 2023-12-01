<template>
  <nav class="nav">
    <ul class="flex">
      <li><NuxtLink to="/">Top</NuxtLink></li>
      <li><NuxtLink to="/other">Other</NuxtLink></li>
      <li><NuxtLink to="/query?q=aaa">Query</NuxtLink></li>
    </ul>
  </nav>
  <h1 class="page_title"><slot /></h1>
</template>

<style lang="scss" scoped>
.nav {
  margin: 0 0 1rem;
}
.flex {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.page_title {
  margin: 0 0 2rem;
  text-align: center;
  font-size: 1.8rem;
  color: #888;
}
.router-link-active {
  border-bottom: solid 1px;
}
</style>
