<template>
  <div class="wrapper" :class="{ dark: theme === '🌙 Dark' }">
    <section class="flex justify-between items-center px-2">
      <span class="text-4xl">SHELTER ZONE - UI Components</span>
      <SZButton
        @click="theme === '🌕 Light' ? (theme = '🌙 Dark') : (theme = '🌕 Light')"
        >{{ theme }}</SZButton
      >
    </section>

    <section>
      <p class="pl-2 text-xl">Button</p>
      <SZButton>Normal</SZButton>
      <SZButton type="primary">Primary</SZButton>
      <SZButton type="warning">Warning</SZButton>
      <SZButton type="danger">Danger</SZButton>
    </section>

    <section>
      <p class="pl-2 text-xl">Input</p>
      <div class="py-3">
        <SZFileInputVue content="Upload Image" />
        <SZDirectoryInputVue />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import SZButton from "./components/button/SZButton.vue"
import SZFileInputVue from "./components/input/SZFileInput.vue"
import SZDirectoryInputVue from "./components/input/SZDirectoryInput.vue"

export default defineComponent({
  name: "App",
  components: {
    SZButton,
    SZFileInputVue,
    SZDirectoryInputVue,
  },

  setup() {
    const theme = ref<string>("🌙 Dark")

    return { theme }
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
</style>
