<script setup lang="ts">
import {
    Newspaper,
    CalendarDays,
    Users,
    GraduationCap,
    ArrowUpRight
} from "@lucide/vue"
import AdminSidebar from "@/components/layout/AdminSidebar.vue"

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
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="md:hidden lg:block hidden">
            <AdminSidebar />
        </div>
        <div class="lg:ml-72 md:ml-0 ml-0">
            <header
                class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
                <div>
                    <h1 class="text-lg font-semibold">Dashboard</h1>
                </div>
                <div
                    class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
                    A
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
            </main>
        </div>
    </div>
</template>