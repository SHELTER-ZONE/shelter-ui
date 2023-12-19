/// <reference types="vite/client" />

// declare module 'prismjs/components/prism-core'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json' {
  const data: any
  export default data
}
