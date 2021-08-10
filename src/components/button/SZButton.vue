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
  transition: 0.3s;
  @apply cursor-pointer select-none outline-none text-shadow-lg;
  @apply p-2 text-center text-xl border-2 border-solid rounded-md ;
  @apply border-normal bg-normal text-gray-600;
  @apply hover: bg-normal hover: text-gray-600;
}

.primary {
  @apply border-primary bg-primary;
  @apply hover: bg-primary;
}

.warning {
  @apply border-warning bg-warning;
  @apply hover: bg-warning;
}

.danger {
  @apply border-danger bg-danger;
  @apply hover: bg-danger;
}

.dashed {
  @apply border-dashed bg-transparent;
}

.outline {
  @apply bg-transparent;
}

.plain {
  @apply bg-transparent hover: bg-transparent;
}
</style>
