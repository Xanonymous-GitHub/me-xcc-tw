import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

const app = createApp(App)

app.use(router)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
