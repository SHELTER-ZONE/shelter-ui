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
import { SZBlockContainer, shelterTheme, SZEditableArea } from '../lib'

const themeOverrides: GlobalThemeOverrides = {
  Scrollbar: {
    color: '#6B7280',
    colorHover: '#6B7280'
  }
}

shelterTheme({
  core: {
    primary: '',
    secondary: '',
    fontBaseColor: '#898989'
  },

  background: {
    primary: '#303a43',
    secondary: ''
  },

  fontSize: {
    sm: '12px',
    sub: '14px',
    normal: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    h1: '40px',
    h2: '30px',
    h3: '24px'
  },

  rounded: {
    sm: '2px',
    sub: '4px',
    normal: '6px',
    md: '8px',
    lg: '10px',
    xl: '15px'
  },

  gap: {
    lv1: '2px',
    lv2: '4px',
    lv3: '8px',
    lv4: '10px',
    lv5: '12px',
    lv6: '15px',
    lv7: '20px',
    lv8: '30px',
    lv9: '40px',
    lv10: '60px'
  }
})
</script>

<style lang="postcss">
html,
body,
#app {
  @apply h-full w-full m-0;
  background: #282828;
}
</style>
