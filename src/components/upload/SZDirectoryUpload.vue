<template>
  <label class="sz-directory-input" :class="{'disabled' : disabled}">
    <span>{{content}}</span>
    <input 
      type="file" 
      class="input-hide" 
      webkitdirectory  
      directory 
    />
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
    disabled: {
      type: Boolean,
      default: false,
    }
  },

})
</script>

<style scoped lang="postcss">
.sz-directory-input {
  @apply cursor-pointer;
  @apply px-3 py-1 border border-solid border-teal-400 text-teal-400 rounded-md;
  @apply grid place-content-center;
}

.sz-directory-input:hover {
  @apply bg-primary text-gray-600;
}

.input-hide {
  display: none;
}

.dashed {
  @apply border-dashed;
}
</style>
