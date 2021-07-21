<template>
  <div class="wrapper" :class="{ dark: theme === '🌙 Dark' }">
    <section class="flex justify-between items-center">
      <span class="text-4xl">SHELTER ZONE - UI Components</span>
      <SZButton
        @click="theme === '🌕 Light' ? (theme = '🌙 Dark') : (theme = '🌕 Light')"
        >{{ theme }}</SZButton
      >
    </section>

    <section class="flex flex-col gap-3">
      <p class="text-xl bg-gray-400 text-white px-2 mb-3">Button</p>
      <div class="container">
        <span>Normal</span>
        <SZButton>Normal</SZButton>
        <SZButton type="primary">Primary</SZButton>
        <SZButton type="warning">Warning</SZButton>
        <SZButton type="danger">Danger</SZButton>
      </div>
      <div class="container">
        <span>Outline</span>
        <SZButton outline>Normal</SZButton>
        <SZButton type="primary" outline>Primary</SZButton>
        <SZButton type="warning" outline>Warning</SZButton>
        <SZButton type="danger" outline>Danger</SZButton>
      </div>
      <div class="container">
        <span>Dashed</span>
        <SZButton dashed>Normal</SZButton>
        <SZButton type="primary" dashed>Primary</SZButton>
        <SZButton type="warning" dashed>Warning</SZButton>
        <SZButton type="danger" dashed>Danger</SZButton>
      </div>
    </section>

    <section class="flex flex-col gap-3">
      <p class="text-xl bg-gray-400 text-white px-2 mb-3">Upload</p>
      <div class="py-3 container">
        <span>File</span>
        <SZFileInputVue content="Upload Image" />
        <SZFileInputVue dashed content="Upload Image" />
      </div>
      <div class="container">
        <span>Directory</span>
        <SZDirectoryInputVue content="Upload Directory"/>
      </div>
      <div class="container">
        <SZFileDrop class="test" @droped="getFiles"/>
        <div>{{files}}</div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import SZButton from "./components/button/SZButton.vue"
import SZFileInputVue from "./components/upload/SZFileUpload.vue"
import SZDirectoryInputVue from "./components/upload/SZDirectoryUpload.vue"
import SZFileDrop from "./components/upload/SZFileDrop.vue"

export default defineComponent({
  name: "App",
  components: {
    SZButton,
    SZFileInputVue,
    SZDirectoryInputVue,
    SZFileDrop,
  },

  setup() {
    const theme = ref<string>("🌙 Dark")
    const files = ref<string>('')
    const getFiles = (data: any) => {
      files.value = data
    }

    return { theme, getFiles, files }
  },
})
</script>

<style lang="postcss">
html, body, #app {
  @apply w-full h-full;
}

.dark {
  /* transition: ease-in-out 1s; */
  @apply bg-gray-800 text-gray-400;
}
</style>

<style lang="postcss" scoped>
.wrapper {
  transition: ease-in-out .3s;
  @apply w-full h-full p-10;
}

section {
  @apply mb-5;
}

.container {
  @apply flex gap-3 items-center;
}

</style>
