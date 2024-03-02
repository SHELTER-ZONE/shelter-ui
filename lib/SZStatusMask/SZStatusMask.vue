<template>
  <div class="sz-status-mask">
    <div class="overlay overlay-mask"></div>
    <div v-if="show" class="overlay overlay-content">
      <slot name="icon" v-if="status !== 'disabled'">
        <Icon :size="iconSize" :color="iconProps.color">
          <component :is="iconProps.icon" />
        </Icon>
      </slot>

      <slot name="text">
        <p v-if="text" :style="`color: ${iconProps.color}; font-size: ${iconSize / 1.5}px`">
          {{ text }}
        </p>
      </slot>
    </div>
    <div class="status-mask-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckmarkFilled, ErrorFilled, WarningHexFilled } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { computed } from 'vue'
import { get } from 'lodash-es'
import type { SZStatusMaskProps } from './types'

const props = withDefaults(defineProps<SZStatusMaskProps>(), {
  iconSize: 18,
  show: true
})

const statusConfig = {
  success: { icon: CheckmarkFilled, color: 'var(--sz-status-success)' },
  error: { icon: ErrorFilled, color: 'var(--sz-status-error)' },
  blocked: { icon: WarningHexFilled, color: 'var(--sz-status-warning)' }
}

const iconProps = computed(() => {
  return {
    icon: props.icon || get(statusConfig, `${props.status}.icon`),
    color: props.color || get(statusConfig, `${props.status}.color`)
  }
})
</script>

<style scoped lang="postcss">
.sz-status-mask {
  @apply relative select-none w-[fit-content];
}

.overlay {
  @apply absolute top-0 bottom-0 left-0 right-0;
  @apply pointer-events-none select-none;
}

.overlay-mask {
  background-color: rgba(0, 0, 0, 0.1);
}
.overlay-content {
  @apply flex justify-center items-center gap-[0.4rem];
  z-index: 1;
}

.status-mask-wrapper {
  @apply opacity-30;
}
</style>
