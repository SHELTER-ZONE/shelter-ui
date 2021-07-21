<template>
  <label class="sz-file-input" :class="{'dashed' : dashed}">
    {{content}}
    <input class="input-hide" type="file" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZFileInput",
  props: {
    content: {
      type: String,
      default: 'Upload',
    },

    dashed: {
      type: Boolean,
      default: false,
    },
  }
})
</script>

<style scoped lang="postcss">

.sz-file-input {
  @apply cursor-pointer;
  @apply px-3 py-1 border-2 border-solid border-teal-400 rounded-md;
  @apply text-teal-400;
}
.input-hide {
  display: none;
}

.dashed {
  @apply border-dashed;
}
</style>
