<template>
  <button class="sz-btn">Button</button>
  <button class="sz-btn warning">Button</button>
  <button class="sz-btn danger">Button</button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZButton",
})
</script>

<style lang="postcss" scoped>
.sz-btn {
  transition: 0.3s;
  @apply cursor-pointer select-none outline-none m-2;
  @apply p-2 text-center text-xl border-2 border-solid rounded-md border-teal-400 text-teal-400;
  @apply hover: bg-teal-400 hover: text-gray-500;
}

.warning {
  @apply border-yellow-400 text-yellow-400;
  @apply hover: bg-yellow-400 hover: text-gray-500;
}

.danger {
  @apply border-rose-400 text-rose-400;
  @apply hover: bg-rose-400 hover: text-gray-600;
}
</style>
