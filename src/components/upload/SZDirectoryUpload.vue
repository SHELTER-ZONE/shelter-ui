<template>
  <label class="sz-directory-input">
    {{content}}
    <input class="input-hide" type="file" webkitdirectory  directory />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZDirectoryInput",
  props: {
    content: {
      type: String,
      default: 'Upload'
    },
  }
})
</script>

<style scoped lang="postcss">
.sz-directory-input {
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
