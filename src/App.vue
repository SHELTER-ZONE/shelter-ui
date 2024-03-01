<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <main class="grid gap-[40px] p-[30px]">
      <div class="flex flex-col gap-[20px]">
        <SZBlockContainer hoverAnimtion> cascs </SZBlockContainer>
        <SZBlockContainer title="this is title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam et in autem quia
          asperiores molestiae tempora animi, dolores soluta pariatur, hic libero dignissimos
          voluptatum nobis ex? Voluptatum, maxime non.
        </SZBlockContainer>
      </div>
    </main>

    <SZEditableArea> cascs </SZEditableArea>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import { SZBlockContainer, shelterTheme, SZEditableArea, ShelterZoneTheme } from '../lib'

const themeOverrides: GlobalThemeOverrides = {
  Scrollbar: {
    color: '#6B7280',
    colorHover: '#6B7280'
  }
}

shelterTheme(ShelterZoneTheme)
</script>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full m-0;
  background: #282828;
}
</style>
