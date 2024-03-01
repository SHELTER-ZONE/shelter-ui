<template>
  <div class="sz-block-container" :class="{ 'hover-animtion': hoverAnimtion }">
    <slot name="title">
      <p v-if="title" class="block-container-title">{{ title }}</p>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { SZBlockContainerProps } from './types'

withDefaults(defineProps<SZBlockContainerProps>(), {
  hoverAnimtion: false,
  bg: 'rgba(0,0,0,0.3)',
  padding: 20
})
</script>

<style scoped lang="postcss">
.sz-block-container {
  @apply flex flex-col;
  @apply rounded-base shadow-xl text-base;
}

.block-container-title {
  @apply text-base text-center mb-[12px];
}
</style>
