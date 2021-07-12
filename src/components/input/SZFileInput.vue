<template>
  <label class="sz-file-input">
    上傳圖片
    <input class="input-hide" type="file" name="" id="" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "SZFileInput",
})
</script>

<style scoped lang="postcss">

.sz-file-input {
  box-sizing: border-box;
  @apply m-2  px-3 py-1 border border-solid border-teal-400 rounded-md;
}
.input-hide {
  display: none;
}
</style>
