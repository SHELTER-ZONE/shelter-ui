<template>
  <div class="block-container" :class="{ 'hover-animtion': hoverAnimtion }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  hoverAnimtion: Boolean,
})
</script>

<style scoped lang="postcss">
.block-container {
  @apply bg-[rgba(0,0,0,0.3)] rounded-base p-[20px] shadow-xl text-base;
}
</style>
