import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import '@fontsource/inter';
import Lenis from "lenis"

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
app.use(createPinia())
app.mount('#app')
