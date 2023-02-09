import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/base.scss'
import '@/assets/theme.scss'
import "@/utils/extend"

import {createPinia} from "pinia";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
