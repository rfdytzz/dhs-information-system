import AdminNews from '@/pages/admin/AdminNews.vue'
import Dashboard from '@/pages/admin/Dashboard.vue'
import Home from '@/pages/Home.vue'
import AboutSchool from '@/pages/main/AboutSchool.vue'
import Contact from '@/pages/main/Contact.vue'
import Events from '@/pages/main/Events.vue'
import Facilities from '@/pages/main/Facilities.vue'
import Gallery from '@/pages/main/Gallery.vue'
import History from '@/pages/main/History.vue'
import News from '@/pages/main/News.vue'
import VisionMission from '@/pages/main/VisionMission.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: AboutSchool },
    { path: '/profile/vision-mission', component: VisionMission },
    { path: '/profile/history', component: History },
    { path: '/profile/facilities', component: Facilities },
    { path: '/news', component: News },
    { path: '/events', component: Events },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },

    { path: '/admin', component: Dashboard },
    { path: '/admin/news', component: AdminNews }
  ],
})

export default router
