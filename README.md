<p align="center" style="font-size: 24px;">
<strong> SHELTER-ZONE UI </strong>
</p>
<hr>
<p align="center">
Vue 3 components library
</p>

## Installation
```py
# with npm
$ npm install shelter-zone-ui

# with yarn
$ yarn add shelter-zone-ui
```

## Getting Start
### By All components
```ts
// in main.js / main.ts
import { createApp } from 'vue'
import App from './App.vue'

import SZUI from 'shelter-zone-ui' // <- import SZUI
import 'shelter-zone-ui/dist/style.css' // <- import SZUI styles

const Vue = createApp(App)
Vue.use(SZUI) // <- use SZUI
Vue.mount("#app")
```
And then free to use anywhere in .vue component.

---
### By Individual import
```html
<!--in xxx.vue component file--> 
<template>
    <SZButton>Button</SZButton>
</template>

<script>
import { defineComponent } from 'vue'

import { SZButton } from 'shelter-zone-ui' // <- import individual component
import 'shelter-zone-ui/dist/style.css' // <- import styles

export default defineComponent({
  name: "App",
  components: {
    SZButton, // <- use component
  },
</script>
```