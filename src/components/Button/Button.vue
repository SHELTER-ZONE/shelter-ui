<template>
  <button class="sz-button" @click="click">button</button>
</template>

<script setup>
const click = () => {
  alert('button')
}
</script>

<style scoped lang="postcss">
.sz-button {
  @apply bg-teal-400 text-gray-700;
}
</style>
