import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Ion } from 'cesium'

createApp(App).mount('#app')

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_ION_ACCESS_TOKEN
