import { createApp } from 'vue'

import App from '@/App.vue'
// style
import 'tailwindcss/tailwind.css' // tailwind
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // global css

// import bootstrap from './core/bootstrap'

// use lazy load element-plus
import loadElementPlus from '@/core/lazy_use'
// use components
import loadComponents from '@/core/use'
// globalProperties
import globalProperties from '@/core/globalProperties'
// icon
import(/* webpackChunkName: "icon" */ '@/icons')
// vue router
import router from '@/router'
// vue vuex
import store from '@/store'

import '@/permission' // permission control

import * as directive from '@/directive' // global directive
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

loadElementPlus(app)
loadComponents(app)
globalProperties(app)

// register global directive
Object.keys(directive).forEach((key) => {
  directive[key].install(app)
})

// element-plus config
app.config.globalProperties.$ELEMENT = { size: 'medium', zIndex: 3000 }

app
  .use(router)
  .use(store)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCNpwiqsI4R1-046gb2QeOM7uwE7L2PG-k',
    },
    autobindAllEvents: true,
  })
  .mount('#app')
