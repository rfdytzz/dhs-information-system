import { createApp } from 'vue' 
import App from './App.vue'
import router from './router'
import '@fontsource/inter';
import Lenis from "lenis"
import pinia from './stores/index.js';

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

router.afterEach((to) => {
    if (to.path.startsWith("/admin")) {
        lenis.destroy()
        document.body.style.overflow = "auto"
        document.documentElement.style.overflow = "auto"
    }
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
