<template>
    <div>
      <p class="pl-2 text-xl">Button</p>
      <SZButton />
    </div>

    <div>
      <p class="pl-2 text-xl">Input</p>
      <SZFileInputVue />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SZButton from './components/button/SZButton.vue'
import SZFileInputVue from './components/input/SZFileInput.vue'

export default defineComponent({
  name: 'App',
  components: {
    SZButton,
    SZFileInputVue,
  }
})
</script>

<style lang="postcss" scoped>
  section {
    @apply mb-5;
  }
</style>
