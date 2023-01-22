<script setup lang="ts">
import { SZBlockContainer } from '@/components'
</script>

<template>
  <div class="flex flex-col gap-[20px]">
    <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
    <SZBlockContainer> cascs </SZBlockContainer>
    <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
    <SZBlockContainer> cascs </SZBlockContainer>
    <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
  </div>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full;
  @apply bg-primary-bg;
}

#app {
  @apply p-[10px];
}
</style>
