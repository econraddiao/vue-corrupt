import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitterSquare, faLinkedin, faInstagramSquare)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
const vm = app.mount('#app')