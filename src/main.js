import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faCode,
  faGlobe,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope, faCode, faGlobe, faBars, faXmark)

const app = createApp(App)

// Register the Font Awesome icon component globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Use Pinia and Vue Router
app.use(createPinia())
app.use(router)

// Mount the app
app.mount('#app')
