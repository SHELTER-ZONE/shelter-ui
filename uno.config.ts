// uno.config.ts
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...UnoCSS options
  theme: {
    colors: {
      primary: '#63E2B7',
      'primary-bg': '#272d38',
      'secondary-bg': '#72767d',
      base: '#6B7280',

      // #2C3E50
    },
    borderRadius: {
      base: '6px',
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
