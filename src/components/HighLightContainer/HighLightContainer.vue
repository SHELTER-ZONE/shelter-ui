<template>
  <div class="highlight-container" :class="{ 'hover-animtion': hoverAnimtion }">
    <div class="highlight left" v-if="lightPosition === 'left'" />
    <div class="content">
      <slot />
    </div>
    <div class="highlight right" v-if="lightPosition === 'right'" />
  </div>
</template>

<script setup lang="ts">
import Color from 'color'
import { computed } from 'vue'
const props = defineProps({
  color: {
    type: String,
    default: '#2BFFC4',
  },
  blur: {
    type: [Number, String],
    default: 80,
  },
  glow: {
    type: [Number, String],
    default: 5,
  },
  lightWidth: {
    type: [Number, String],
    default: 10,
  },
  lightPosition: {
    type: String,
    default: 'left',
  },
  hoverAnimtion: Boolean,
})

const highlightWidth = computed(() => `${props.lightWidth}px`)
const highlightColor = computed(() => Color(props.color).rgb())
const blurRange = computed(() => `${props.blur}px`)
const glowRange = computed(() => `${props.glow}px`)
</script>

<style scoped lang="postcss">
.highlight-container {
  @apply bg-[rgba(0,0,0,0.3)] rounded-base shadow-xl text-base;
  @apply flex;
}

.left {
  @apply rounded-tl-base rounded-bl-base;
}

.right {
  @apply rounded-tr-base rounded-br-base;
}

.highlight {
  @apply h-auto;
  width: v-bind(highlightWidth);
  background-color: v-bind(highlightColor);
  -webkit-box-shadow: 0px 0px v-bind(blurRange) v-bind(glowRange)
    v-bind(highlightColor);
  -moz-box-shadow: 0px 0px v-bind(blurRange) v-bind(glowRange)
    v-bind(highlightColor);
  box-shadow: 0px 0px v-bind(blurRange) v-bind(glowRange) v-bind(highlightColor);
}

.content {
  @apply p-[20px] w-full;
}
</style>
