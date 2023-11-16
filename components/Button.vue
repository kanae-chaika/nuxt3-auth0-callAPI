<template>
  <button type="button" class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: flex;
  padding: 0 1em;
  margin: 0 0 1em;
  color: #fff;
  font-size: 1.5rem;
  line-height: 2;
  background: #8280c2;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
}
</style>
