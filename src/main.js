import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import router from '@/router';
import { pinia } from './Store/pinia'
import { useStore } from '@/Store/modules'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
  components: {
    ...components,
    ...labsComponents,
    VSkeletonLoader // Include VSkeletonLoader
  },
  directives,
})

createApp(App)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .provide('store', useStore())
    .mount('#app')
