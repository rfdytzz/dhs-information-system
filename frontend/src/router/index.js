import AboutSchool from '@/pages/AboutSchool.vue'
import Facilities from '@/pages/Facilities.vue'
import History from '@/pages/History.vue'
import Home from '@/pages/Home.vue'
import VisionMission from '@/pages/VisionMission.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: AboutSchool },
    { path: '/profile/vision-mission', component: VisionMission },
    { path: '/profile/history', component: History },
    { path: '/profile/facilities', component: Facilities },
  ],
})

export default router
