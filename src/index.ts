import SZFileUpload from "./components/upload/SZFileUpload.vue"
import SZDropUpload from "./components/upload/SZDropUpload.vue"
import SZDirectoryUpload from "./components/upload/SZDirectoryUpload.vue"
import SZButton from "./components/button/SZButton.vue"
import SZBadge from "./components/badge/SZBadge.vue"
import { App } from "vue"

const components = {
  SZButton,
  SZFileUpload,
  SZDirectoryUpload,
  SZDropUpload,
  SZBadge,
}

function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { SZButton, SZFileUpload, SZDirectoryUpload, SZDropUpload, SZBadge }
