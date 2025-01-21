import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import '@/assets/styles/index.scss'
import { createI18n } from 'vue-i18n'
import lan from '@/locale/lan'

const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': lan['en-US'],
    'zh-CN': lan['zh-CN']
  }
})

const app = createApp(App)

app.use(router).use(i18n).mount('#app')
