<template>
  <button class="sz-btn" :class="[
    {'outline' : outline}, 
    {'dashed': dashed}, 
    {'plain': plain}, 
    {'disabled': disabled}, 
    type,
    ]"
  >
  <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZButton",
  props: {
    type: {
      type: String,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    dashed: {
      type: Boolean,
      default: false,
    },

    outline: {
      type: Boolean,
      default: false,
    },

    plain: {
      type: Boolean,
      default: false,
    },
  }
})
</script>

<style lang="postcss" scoped>
@import url('../../styles/global.css');

.sz-btn {
  @apply cursor-pointer select-none outline-none text-shadow-md;
  @apply px-6 py-3 text-center text-xl border border-solid rounded-md ;
  @apply border-normal bg-normal text-gray-100;
  @apply hover: bg-normal hover: bg-opacity-20 hover: text-gray-200;
}

.primary {
  @apply border-primary bg-primary;
  @apply hover: bg-primary hover: bg-opacity-20 hover: text-gray-200;
}

.warning {
  @apply border-warning bg-warning;
  @apply hover: bg-warning hover: bg-opacity-20 hover: text-gray-200;
}

.danger {
  @apply border-danger bg-danger;
  @apply hover: bg-danger hover: bg-opacity-20 hover: text-gray-200;
}

.dashed {
  @apply border-dashed bg-transparent text-gray-400;;
}

.outline {
  @apply bg-transparent text-gray-400;
}

.plain {
  @apply bg-transparent hover: bg-transparent;
}
</style>
