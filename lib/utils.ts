export interface SZUIThemeConfig {
  core: {
    primary: string
    secondary: string

    fontBaseColor: string
  }

  background: {
    primary: string
    secondary: string
  }

  fontSize: {
    sm: string // 12px
    sub: string // 14px
    normal: string // 16px
    md: string // 18px
    lg: string // 20px
    xl: string // 24px

    h1: string // 40px
    h2: string // 30px
    h3: string // 24px
  }

  rounded: {
    sm: string // 2px
    sub: string // 4px
    normal: string // 6px
    md: string // 8px
    lg: string // 10px
    xl: string // 15px
  }

  gap: {
    lv1: string // 2px
    lv2: string // 4px
    lv3: string // 8px
    lv4: string // 10px
    lv5: string // 12px
    lv6: string // 15px
    lv7: string // 20px
    lv8: string // 30px
    lv9: string // 40px
    lv10: string // 60px
  }
}

const UIVarNameConfig = {
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
    const varGroup = UIVarNameConfig[group]
    for (const key in themeConfig[group]) {
      setCssVar(`sz-${varGroup}-${key}`, themeConfig[group][key])
    }
  }
}
