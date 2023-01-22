import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
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
  },
})
