<script setup lang="ts">
import AdminSidebar from "@/components/layout/AdminSidebar.vue"
import { Search, Plus, Eye, Pencil, Trash2, MapPin, CalendarDays, Users } from "@lucide/vue"
import { ref } from "vue"

const search = ref("")
const category = ref("All")

const categories = [
    "All",
    "Competition",
    "Seminar",
    "Workshop",
    "Sports",
    "School"
]

const events = [
    {
        id: 1,
        title: "National Programming Competition",
        description: "Programming competition for vocational students.",
        category: "Competition",
        location: "Main Hall",
        date: "12 Aug 2026",
        status: "Upcoming",
        image: "https://picsum.photos/800/500?random=31"
    },
    {
        id: 2,
        title: "Career Seminar",
        description: "Industry sharing with software engineers.",
        category: "Seminar",
        location: "Auditorium",
        date: "20 Aug 2026",
        status: "Ongoing",
        image: "https://picsum.photos/800/500?random=32"
    },
    {
        id: 3,
        title: "Sports Day",
        description: "Annual sports event for all students.",
        category: "Sports",
        location: "School Field",
        date: "30 Jul 2026",
        status: "Completed",
        image: "https://picsum.photos/800/500?random=33"
    }
]
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="hidden lg:block">
            <AdminSidebar />
        </div>

        <div class="lg:ml-72">
            <header
                class="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-gray-200 bg-white px-8">
                <div>
                    <h1 class="text-xl font-semibold">Event Management</h1>
                    <p class="text-sm text-gray-500">Create and manage school events</p>
                </div>

                <router-link to="/admin/events/add"
                    class="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                    <Plus class="size-4" />
                    Create Event
                </router-link>
            </header>

            <main class="p-8">
                <section class="rounded-xl border border-gray-200 bg-white p-5">
                    <div class="flex gap-4">
                        <div class="relative flex-1">
                            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                            <input v-model="search" placeholder="Search event..."
                                class="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400 focus:ring-3 ring-gray-200" />
                        </div>

                        <select v-model="category" class="rounded-lg border border-gray-200 px-4 text-sm outline-none">
                            <option v-for="item in categories" :key="item">
                                {{ item }}
                            </option>
                        </select>
                    </div>
                </section>

                <section class="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                    <table class="min-w-275 w-full">
                        <thead class="border-b border-gray-200 bg-gray-50 text-sm text-gray-500">
                            <tr>
                                <th class="px-6 py-4 text-left">Event</th>
                                <th class="px-6 py-4 text-left">Category</th>
                                <th class="px-6 py-4 text-left">Location</th>
                                <th class="px-6 py-4 text-left">Date</th>
                                <th class="px-6 py-4 text-left">Status</th>
                                <th class="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="item in events" :key="item.id"
                                class="border-b border-gray-200 transition hover:bg-gray-50">
                                <td class="px-6 py-4">
                                    <div class="flex gap-4">
                                        <img :src="item.image" class="h-16 w-24 rounded-lg object-cover" />

                                        <div>
                                            <h3 class="font-medium">
                                                {{ item.title }}
                                            </h3>

                                            <p class="mt-1 line-clamp-2 text-sm text-gray-500">
                                                {{ item.description }}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4">
                                    <span class="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                        {{ item.category }}
                                    </span>
                                </td>

                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2 text-sm text-gray-600">
                                        <MapPin class="size-4" />
                                        {{ item.location }}
                                    </div>
                                </td>

                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-2 text-sm text-gray-600">
                                        <CalendarDays class="size-4" />
                                        {{ item.date }}
                                    </div>
                                </td>

                                <td class="px-6 py-4">
                                    <span :class="{
                                        'bg-blue-100 text-blue-700': item.status === 'Upcoming',
                                        'bg-green-100 text-green-700': item.status === 'Ongoing',
                                        'bg-gray-100 text-gray-700': item.status === 'Completed'
                                    }" class="rounded-full px-3 py-1 text-xs">
                                        {{ item.status }}
                                    </span>
                                </td>

                                <td class="px-6 py-4">
                                    <div class="flex justify-end gap-1">
                                        <button class="rounded-md p-2 hover:bg-gray-100">
                                            <Eye class="size-4" />
                                        </button>

                                        <button class="rounded-md p-2 hover:bg-gray-100">
                                            <Pencil class="size-4" />
                                        </button>

                                        <button class="rounded-md p-2 text-red-500 hover:bg-red-50">
                                            <Trash2 class="size-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    </div>
</template>