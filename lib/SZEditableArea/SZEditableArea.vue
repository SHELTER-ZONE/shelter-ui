<template>
  <div
    class="sz-editable-block"
    ref="targetEl"
    :class="{
      hide: hideEdit,
      'sz-editable-block-hover-effect': !hideEdit
    }"
  >
    <button class="edit-btn" @click="onEdit" :style="hideEdit ? `opacity: 0; cursor: default` : ''">
      <n-icon color="var(--sz-bg-primary)"><Edit /></n-icon>
    </button>
    <div
      :class="{
        'sz-editable-block-mask': isHovered && !hideEdit,
        'sz-editable-block-mask-hide': !isHovered
      }"
    ></div>
    <div class="sz-editable-block-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SZEditableBlockProps } from './types'
import { NIcon } from 'naive-ui'
import { Edit } from '@vicons/carbon'
import { useElementHover } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<SZEditableBlockProps>()

const emits = defineEmits(['edit'])

const targetEl = ref<Element | null>()
const isHovered = useElementHover(targetEl)

const onEdit = () => {
  if (props.hideEdit) return
  emits('edit')
}
</script>

<style scoped lang="postcss">
.sz-editable-block {
  @apply relative rounded-[var(--sz-rounded-normal)];
  @apply border-[var(--sz-core-fontBaseColor)] border-1 border-solid;

  @apply ease-in-out transition-all duration-300;
  @apply overflow-hidden;
}

.sz-editable-block-mask {
  @apply w-full h-full;
  @apply absolute top-0 left-0 bottom-0 right-0;
  @apply select-none pointer-events-none;
  @apply bg-black opacity-25;
}
.sz-editable-block-mask-hide {
  @apply bg-transparent;
  @apply ease-in-out transition-all duration-300;
  @apply overflow-hidden;
  @apply select-none pointer-events-none;
}

.sz-editable-block-hover-effect {
  @apply hover:(border-[var(--sz-core-primary)]);
}

.sz-editable-block:hover {
  .edit-btn {
    @apply bg-[var(--sz-core-primary)];
  }
  /* .sz-editable-block-wrapper {
    @apply brightness-80;
  } */
}

.edit-btn {
  @apply absolute top-0 right-0;
  @apply bg-[var(--sz-core-fontBaseColor)] hover:(opacity-80);
  @apply px-[10px] py-[5px];
  @apply rounded-bl-[var(--sz-rounded-normal)] rounded-tr-[var(--sz-rounded-normal)];
  @apply ease-in-out transition-all duration-300;
}

.hide {
  @apply border-transparent;
}
</style>
