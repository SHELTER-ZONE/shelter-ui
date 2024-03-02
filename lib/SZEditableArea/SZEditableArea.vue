<template>
  <div class="sz-editable-block" ref="targetEl" :class="{ hide: hideEdit }">
    <div
      class="sz-editable-block-mask"
      :class="{
        'sz-editable-block-mask-show': isHovered && !hideEdit
      }"
    ></div>
    <button class="edit-btn" @click="onEdit" :style="hideEdit ? `opacity: 0; cursor: default` : ''">
      <n-icon color="var(--sz-bg-primary)"><Edit /></n-icon>
    </button>
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
@import './style.css';
</style>
