<template>
  <button class="sz-btn" :class="type">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZButton",
  props: {
    type: {
      type: String,
    },

    solid: {
      type: Boolean,
      default: false,
    },
  }
})
</script>

<style lang="postcss" scoped>
.sz-btn {
  transition: 0.3s;
  @apply cursor-pointer select-none outline-none m-2;
  @apply p-2 text-center text-xl border-2 border-solid rounded-md ;
  @apply border-gray-400 text-gray-400;
  @apply hover: bg-gray-400 hover: text-gray-600;
}

.primary {
  @apply border-teal-400 text-teal-400;
  @apply hover: bg-teal-400 hover: text-gray-600;
}

.warning {
  @apply border-yellow-400 text-yellow-400;
  @apply hover: bg-yellow-400 hover: text-gray-600;
}

.danger {
  @apply border-rose-400 text-rose-400;
  @apply hover: bg-rose-400 hover: text-gray-600;
}

</style>
