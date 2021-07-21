<template>
  <div class="sz-file-drop relative" 
    @drop.prevent="dropHandle"  
    @dragenter.prevent="onEnter = true"
    @dragover.prevent="onOver = true"
    @dragleave.prevent="onEnter = false, onOver = false"
  >
    <label class="input-label" :class="{highlight : onEnter || onOver}">
      <span>{{content}}</span>
      <input class="input-hide" type="file" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "SZFileDrop",
  props: {
    content: {
      type: String,
      default: 'Drop Here'
    },
  },

  setup(props, {emit}) {
    const onEnter = ref<boolean>(false)
    const onOver = ref<boolean>(false)
    const onEnd = ref<boolean>(false)

    interface dropData {
      event: DragEvent,
      files: Array<File | String>
    }

    const dropHandle = (e: DragEvent) => {
      const dataTransfer = e.dataTransfer!
      const data: dropData = {
        event: e,
        files: []
      }

      if (dataTransfer.items) {
       // Use DataTransferItemList interface to access the file(s)
       for (let i = 0; i < dataTransfer.items.length; i++) {
         // If dropped items aren't files, reject them
         if (dataTransfer.items[i].kind === 'file') {
           const file: File = dataTransfer.items[i].getAsFile() as File
           if(file) data.files.push(file)
         }
       }
      } 
      else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < dataTransfer.files.length; i++) {
          data.files.push(dataTransfer.files[i].name)
        }
      }

      emit('droped', data)
      onEnter.value = false
      onOver.value = false
      onEnd.value = false
    }

    return { dropHandle, onEnter, onOver, onEnd }
  }
})
</script>

<style scoped lang="postcss">
.sz-file-drop {
  width: 100%;
  height: 200px;
}

.input-label {
  @apply cursor-pointer;
  @apply absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center;
  @apply border-2 border-dashed border-teal-400 rounded-md;
  @apply text-teal-400;
}

.highlight {
  @apply bg-teal-400 bg-opacity-20;
}

.input-hide {
  display: none;
}

</style>
