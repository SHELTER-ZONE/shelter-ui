import type { SZUIThemeConfig } from './types'

export * from './presets'
export * from './types'

export const UIVarGroupConfig = {
  core: 'core',
  background: 'bg',
  fontSize: 'font',
  rounded: 'rounded',
  gap: 'gap'
}

export const setCssVar = (name: string, value: string) => {
  const r = document.querySelector(':root')
  r.style.setProperty(`--${name}`, value)
}

export const shelterTheme = (themeConfig: SZUIThemeConfig) => {
  console.log('gerenateUIVar', themeConfig)
  for (const group in themeConfig) {
    const varGroup = UIVarGroupConfig[group]
    for (const key in themeConfig[group]) {
      setCssVar(`sz-${varGroup}-${key}`, themeConfig[group][key])
    }
  }
}
