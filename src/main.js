import Vue from 'vue'
import App from './App.vue'

const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')

app.component('my-header', myHeader);


/*
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome);
createApp(App).component("font-awesome", faFontAwesome);
createApp(App).mount("#app");

*/