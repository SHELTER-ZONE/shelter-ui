import { App as Application } from 'vue'
import Button from './Button.vue'

import { registerComponent } from '@/utils/plugins'

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Button)
  },
}

export default Plugin
export { Button }
