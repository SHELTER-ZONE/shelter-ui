<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <main class="grid gap-[40px] p-[30px]">
      <div class="flex flex-col gap-[20px]">
        <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
        <SZBlockContainer title="this is title"> cascs </SZBlockContainer>
      </div>
    </main>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

import { SZBlockContainer } from '../lib'

const themeOverrides: GlobalThemeOverrides = {
  Scrollbar: {
    color: '#6B7280',
    colorHover: '#6B7280'
  }
}
</script>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full m-0;
  /* @apply bg-primary-bg; */
}
</style>
