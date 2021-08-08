import { App } from 'vue'
import SZBadge from './SZBadge.vue'

SZBadge.install = (Vue: App) => {
  Vue.component(SZBadge.name, SZBadge)
}

export default SZBadge