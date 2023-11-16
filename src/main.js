/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import './axios'

// Composables
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import pinia from '@/store'
import { useMe } from '@/store/me'

const app = createApp(App)

app.use(pinia)
const meStore  = useMe()
meStore.getMe()
  .catch(() => {})
  .finally(() => {
    app.use(vuetify)
    app.use(router)
    app.mount('#app')
  })


// registerPlugins(app)

