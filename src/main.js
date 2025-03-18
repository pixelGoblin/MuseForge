import './assets/main.css'

import { createApp } from 'vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiHeart, mdiPencil, mdiDelete, mdiDiceMultiple, mdiAutoFix, mdiDeleteAlert, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
// import '@mdi/font/css/materialdesignicons.css'

import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      heart: mdiHeart,
      edit: mdiPencil,
      remove: mdiDelete,
      dice: mdiDiceMultiple,
      generate: mdiAutoFix,
      deleteAll: mdiDeleteAlert,
      nightTime: mdiWeatherNight,
      dayTime: mdiWeatherSunny
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
  }
})
app.use(vuetify)
app.use(createPinia())

app.mount('#app')