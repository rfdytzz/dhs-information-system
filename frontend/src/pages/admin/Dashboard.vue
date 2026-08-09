<script setup>
import {
    Newspaper,
    CalendarDays,
    Users,
    GraduationCap,
    ArrowUpRight,
    User2Icon,
    Settings,
    LogOut
} from "@lucide/vue"
import AdminSidebar from "@/components/layout/AdminSidebar.vue"
import { ref } from "vue"
import { useUserStore } from "@/stores/user"
const user = useUserStore()

const stats = [
    { title: "Total Students", value: "1,240", icon: Users, description: "+12% this year" },
    { title: "Teachers", value: "86", icon: GraduationCap, description: "Active teachers" },
    { title: "News Published", value: "124", icon: Newspaper, description: "This semester" },
    { title: "Upcoming Events", value: "18", icon: CalendarDays, description: "Scheduled events" }
]

const news = [
    { title: "Students Win Programming Competition", date: "August 5, 2026" },
    { title: "New Digital Laboratory Opened", date: "August 2, 2026" },
    { title: "School Registration Started", date: "July 20, 2026" }
]

const activities = [
    "Admin updated school profile",
    "New event created",
    "Gallery photos uploaded",
    "New student registration received"
]

const isProfileDrop = ref(false)
const toggleProfileDrop = () => {
    isProfileDrop.value = !isProfileDrop.value
}

</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="md:hidden lg:block hidden">
            <AdminSidebar />
        </div>
        <div class="lg:ml-72 md:ml-0 ml-0">
            <header
                class="sticky top-0 z-30 flex h-18 items-center justify-between border-b border-gray-200 bg-white px-8">
                <div>
                    <h1 class="text-lg font-semibold">Dashboard</h1>
                </div>
                <div class="flex flex-col relative items-end">
                    <div
                        class="flex items-center gap-2 hover:bg-gray-100 p-1 cursor-pointer transition duration-100 rounded-md hover:ring-3 ring-gray-100">
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
                            RD
                        </div>
                        <div class="flex flex-col items-start" @click="toggleProfileDrop">
                            <div class="text-[12px] font-semibold">{{ user.name }}</div>
                            <div class="text-[12px] text-gray-500 uppercase">{{ user.role }}</div>
                        </div>
                    </div>
                    <div class="absolute right-0 top-full pt-2 z-50">
                        <div :class="isProfileDrop ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'"
                            class="text-sm w-40 bg-white border transition-all duration-100 ease-in-out border-gray-100 p-2 flex flex-col rounded-md gap-1 shadow-md">
                            <router-link to=""
                                class="p-2 hover:bg-gray-100 rounded-md transition duration-100 flex items-center gap-2">
                                <User2Icon class="size-4" /> Profile
                            </router-link>
                            <router-link to=""
                                class="p-2 hover:bg-gray-100 rounded-md transition duration-100 flex items-center gap-2">
                                <Settings class="size-4" /> Settings
                            </router-link>
                            <router-link to=""
                                class="p-2 hover:bg-red-50 text-red-500 rounded-md transition duration-100 flex items-center gap-2">
                                <LogOut class="size-4" /> Log out
                            </router-link>
                        </div>
                    </div>
                </div>
            </header>

            <main class="p-8">
                <section>
                    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        <div v-for="stat in stats" :key="stat.title"
                            class="rounded-xl border border-gray-200 bg-white p-6">
                            <div class="flex items-center justify-between">
                                <p class="text-sm text-gray-500">{{ stat.title }}</p>
                                <component :is="stat.icon" class="h-5 w-5 text-gray-500" />
                            </div>
                            <h2 class="mt-4 text-3xl font-bold">{{ stat.value }}</h2>
                            <p class="mt-2 text-sm text-gray-500">{{ stat.description }}</p>
                        </div>
                    </div>
                </section>
                <section class="mt-8 grid gap-6 xl:grid-cols-3">
                    <div class="xl:col-span-2 rounded-xl border border-gray-200 bg-white">
                        <div class="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                            <div>
                                <h2 class="font-semibold">Latest News</h2>
                                <p class="text-sm text-gray-500">Recently published articles</p>
                            </div>

                            <router-link to="/admin/news" class="text-sm text-gray-500 transition hover:text-gray-900">
                                View All
                            </router-link>
                        </div>

                        <div>
                            <div v-for="item in news" :key="item.title"
                                class="flex items-center justify-between border-b border-gray-200 px-6 py-5 last:border-0">
                                <div>
                                    <h3 class="font-medium">{{ item.title }}</h3>
                                    <p class="mt-1 text-sm text-gray-500">{{ item.date }}</p>
                                </div>

                                <router-link to="/admin/news"
                                    class="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100">
                                    <ArrowUpRight class="size-4" />
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border border-gray-200 bg-white">
                        <div class="border-b border-gray-200 px-6 py-4">
                            <h2 class="font-semibold">Recent Activities</h2>
                            <p class="text-sm text-gray-500">Latest system activities</p>
                        </div>

                        <div class="space-y-4 p-6">
                            <div v-for="activity in activities" :key="activity" class="flex gap-3">
                                <div class="mt-2 h-2 w-2 rounded-full bg-gray-900"></div>

                                <div>
                                    <p class="text-sm">{{ activity }}</p>
                                    <p class="mt-1 text-xs text-gray-500">Just now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mt-6 grid gap-6 lg:grid-cols-2">
                    <div class="rounded-xl border border-gray-200 bg-white">
                        <div class="border-b border-gray-200 px-6 py-4">
                            <h2 class="font-semibold">Upcoming Events</h2>
                            <p class="text-sm text-gray-500">Next scheduled activities</p>
                        </div>

                        <div class="space-y-4 p-6">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium">National Coding Competition</p>
                                    <p class="text-sm text-gray-500">12 Aug 2026 • Main Hall</p>
                                </div>

                                <span class="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                    Upcoming
                                </span>
                            </div>

                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium">Career Seminar</p>
                                    <p class="text-sm text-gray-500">20 Aug 2026 • Auditorium</p>
                                </div>

                                <span class="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                    Upcoming
                                </span>
                            </div>

                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium">Sports Day</p>
                                    <p class="text-sm text-gray-500">28 Aug 2026 • School Field</p>
                                </div>

                                <span class="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                    Upcoming
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border border-gray-200 bg-white">
                        <div class="border-b border-gray-200 px-6 py-4">
                            <h2 class="font-semibold">Quick Actions</h2>
                            <p class="text-sm text-gray-500">Frequently used shortcuts</p>
                        </div>

                        <div class="grid gap-4 p-6 sm:grid-cols-2">
                            <router-link to="/admin/news/add"
                                class="rounded-xl border border-gray-200 p-5 transition hover:bg-gray-50">
                                <Newspaper class="mb-3 size-6" />
                                <h3 class="font-medium">Create News</h3>
                                <p class="mt-1 text-sm text-gray-500">
                                    Publish a new article.
                                </p>
                            </router-link>

                            <router-link to="/admin/events/add"
                                class="rounded-xl border border-gray-200 p-5 transition hover:bg-gray-50">
                                <CalendarDays class="mb-3 size-6" />
                                <h3 class="font-medium">Create Event</h3>
                                <p class="mt-1 text-sm text-gray-500">
                                    Schedule a new event.
                                </p>
                            </router-link>

                            <router-link to="/admin/gallery"
                                class="rounded-xl border border-gray-200 p-5 transition hover:bg-gray-50">
                                <Users class="mb-3 size-6" />
                                <h3 class="font-medium">Manage Users</h3>
                                <p class="mt-1 text-sm text-gray-500">
                                    Manage admin accounts.
                                </p>
                            </router-link>

                            <router-link to="/admin/settings"
                                class="rounded-xl border border-gray-200 p-5 transition hover:bg-gray-50">
                                <Settings class="mb-3 size-6" />
                                <h3 class="font-medium">Settings</h3>
                                <p class="mt-1 text-sm text-gray-500">
                                    Configure the system.
                                </p>
                            </router-link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>