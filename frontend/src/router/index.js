import AdminNews from '@/pages/admin/news/AdminNews.vue'
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
import CreateNews from '@/pages/admin/news/CreateNews.vue'
import AdminEvents from '@/pages/admin/events/AdminEvents.vue'
import CreateEvents from '@/pages/admin/events/CreateEvents.vue'
import AdminUsers from '@/pages/admin/users/AdminUsers.vue'
import CreateUsers from '@/pages/admin/users/CreateUsers.vue'
import Login from '@/pages/auth/Login.vue'
import { useUserStore } from '@/stores/user'
import pinia from '@/stores'

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

    { path: '/login', component: Login },

    { path: '/admin', component: Dashboard, meta: { auth: true, role: 'admin' } },
    { path: '/admin/news', component: AdminNews },
    { path: '/admin/news/add', component: CreateNews },
    { path: '/admin/events', component: AdminEvents },
    { path: '/admin/events/add', component: CreateEvents },
    { path: '/admin/users', component: AdminUsers },
    { path: '/admin/users/add', component: CreateUsers },
  ],
})

export default router

router.beforeEach((to, from) => {
  const user = useUserStore(pinia)
  const token = user.token
  console.log("TOKEN", user.token)
  console.log("ROLE", user.role)

  if (to.meta.auth && !token) {
    console.log("BLOCK: TOKEN KOSONG")
    return '/login'
  }

  if (to.meta.role && to.meta.role !== user.role) {
    return '/'
  }

  return true
})