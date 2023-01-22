<script setup lang="ts">
import { SZBlockContainer, SZHighLightContainer } from '@/components'
</script>

<template>
  <main class="grid gap-[40px]">
    <div class="flex flex-col gap-[20px]">
      <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
      <SZBlockContainer> cascs </SZBlockContainer>
    </div>
    <div class="flex flex-col gap-[20px]">
      <SZHighLightContainer hoverAnimtion color="#2EABFF">
        #2EABFF
      </SZHighLightContainer>
      <SZHighLightContainer hoverAnimtion>
        #2BFFC4 (Default)
      </SZHighLightContainer>
      <SZHighLightContainer
        hoverAnimtion
        color="#EFF542"
        lightWidth="15"
        lightPosition="right"
      >
        #EFF542
      </SZHighLightContainer>
    </div>
  </main>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full;
  @apply bg-primary-bg;
}

#app {
  @apply p-[30px];
}
</style>
