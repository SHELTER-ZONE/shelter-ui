<template>
  <section class="sz-block-container" :class="{ 'hover-animtion': hoverAnimtion }">
    <slot name="title">
      <p v-if="title" class="sz-block-container-title">{{ title }}</p>
    </slot>

    <div class="sz-block-container-body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SZBlockContainerProps } from './types'

withDefaults(defineProps<SZBlockContainerProps>(), {
  hoverAnimtion: true
})
</script>

<style scoped lang="postcss">
@import './style.css';
</style>
