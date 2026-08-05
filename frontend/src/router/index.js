import Home from '@/pages/Home.vue'
import AboutSchool from '@/pages/main/AboutSchool.vue'
import Facilities from '@/pages/main/Facilities.vue'
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
  ],
})

export default router
