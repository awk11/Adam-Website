import "bootstrap/js/dist/collapse"
import "bootstrap/js/dist/carousel"
import "bootstrap-icons/font/bootstrap-icons.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '../App.vue'
import router from '../router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
