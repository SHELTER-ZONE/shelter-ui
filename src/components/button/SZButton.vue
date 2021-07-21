<template>
  <button class="sz-btn" :class="[
    {'outline' : outline}, 
    {'dashed': dashed}, 
    {'plain': plain}, 
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
  @apply cursor-pointer select-none outline-none ;
  @apply p-2 text-center text-xl border-2 border-solid rounded-md ;
  @apply border-gray-400 bg-gray-400 text-gray-600;
  @apply hover: bg-gray-400 hover: text-gray-600;
}

.primary {
  @apply border-teal-400 bg-teal-400;
  @apply hover: bg-teal-400;
}

.warning {
  @apply border-yellow-400 bg-yellow-400;
  @apply hover: bg-yellow-400;
}

.danger {
  @apply border-rose-400 bg-rose-400;
  @apply hover: bg-rose-400;
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
