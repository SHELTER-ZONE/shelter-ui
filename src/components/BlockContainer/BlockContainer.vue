<template>
  <div class="block-container" :class="{ 'hover-animtion': hoverAnimtion }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hoverAnimtion: boolean
}>()
</script>

<style scoped lang="postcss">
.block-container {
  @apply bg-[rgba(0,0,0,0.3)] rounded-base p-[20px] shadow-xl text-base;
  @apply transition ease-in-out duration-300;
}

.hover-animtion {
  @apply hover:(transform translate-y-[-5px]);
}
</style>
