<template>
  <span class="sz-badge">
    <slot />
    <span class="sz-badge-data" :class="type">{{data}}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZBadge",
  props: {
    data: String,
    type: String,
  },
})
</script>

<style lang="postcss">
.sz-badge {
  @apply relative inline-block;
}

.sz-badge-data {
  @apply p-1 px-2 rounded-xl select-none whitespace-nowrap ;
  @apply bg-teal-400 absolute inline-block top-0 right-0;
  @apply text-center text-white text-[12px] ;
  @apply text-shadow-xl shadow-lg;
  transform: translateX(45%) translateY(-45%);
}

.primary {
  @apply border-primary bg-primary text-gray-800;
  @apply hover: bg-primary;
}

.warning {
  @apply border-warning bg-warning text-gray-800;
  @apply hover: bg-warning;
}

.danger {
  @apply border-danger bg-danger text-gray-800;
  @apply hover: bg-danger;
}
</style>