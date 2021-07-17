import SZButton from "./components/button/SZButton.vue"
import SZFileInputVue from "./components/upload/SZFileInput.vue"
import SZDirectoryInputVue from "./components/upload/SZDirectoryInput.vue"
import SZFileDrop from "./components/upload/SZFileDrop.vue"
import { App } from "vue"

const components = {
  SZButton,
  SZFileInputVue,
  SZDirectoryInputVue,
  SZFileDrop,
}

function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { SZButton, SZFileInputVue, SZDirectoryInputVue, SZFileDrop }
