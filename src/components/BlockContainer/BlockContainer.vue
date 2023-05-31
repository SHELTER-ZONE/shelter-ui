<template>
  <div class="sz-block-container" :class="{ 'hover-animtion': hoverAnimtion }">
    <slot name="title">
      <p class="block-container-title">{{ title }}</p>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface SZBlockContainerProps {
  hoverAnimtion?: boolean
  title?: string
}

defineProps<SZBlockContainerProps>()
</script>

<style scoped lang="postcss">
.sz-block-container {
  @apply flex flex-col;
  @apply bg-[rgba(0,0,0,0.3)] rounded-base p-[20px] shadow-xl text-base;
}

.block-container-title {
  @apply text-base text-center mb-[12px];
}
</style>
