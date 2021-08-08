import SZFileInput from "./components/upload/SZFileUpload.vue"
import SZFileDrop from "./components/upload/SZFileDrop.vue"
import SZDirectoryInput from "./components/upload/SZDirectoryUpload.vue"
import SZButton from "./components/button/SZButton.vue"
import SZBadge from "./components/badge/SZBadge.vue"
import { App } from "vue"

const components = {
  SZButton,
  SZFileInput,
  SZDirectoryInput,
  SZFileDrop,
  SZBadge,
}

function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { SZButton, SZFileInput, SZDirectoryInput, SZFileDrop, SZBadge }
