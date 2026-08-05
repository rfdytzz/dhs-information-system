import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/inter';
import Lenis from 'lenis';

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const app = createApp(App)

app.use(router)

app.mount('#app')
