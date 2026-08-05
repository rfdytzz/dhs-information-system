<script setup lang="ts">
import AdminSidebar from "@/components/layout/AdminSidebar.vue"
import { Search, Plus, MoreHorizontal, Eye, Pencil, Trash2, Newspaper, FileText, CheckCircle2, Clock } from "@lucide/vue"
AdminSidebar
import { ref } from "vue"

const search = ref("")
const category = ref("All")

const categories = [
    "All",
    "Achievement",
    "Event",
    "School",
    "Announcement"
]

const news = [
    {
        id: 1,
        title: "Students Win Programming Competition",
        excerpt: "Students successfully achieved first place in national competition.",
        category: "Achievement",
        date: "August 5, 2026",
        status: "Published",
        image: "https://picsum.photos/800/500?random=21"
    },
    {
        id: 2,
        title: "New Digital Laboratory Opened",
        excerpt: "A new computer laboratory is available for students.",
        category: "School",
        date: "August 2, 2026",
        status: "Published",
        image: "https://picsum.photos/800/500?random=22"
    },
    {
        id: 3,
        title: "New Student Registration",
        excerpt: "Registration for new students is now open.",
        category: "Announcement",
        date: "July 20, 2026",
        status: "Draft",
        image: "https://picsum.photos/800/500?random=23"
    }
]
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="md:hidden lg:block hidden">
            <AdminSidebar />
        </div>
        <div class="lg:ml-72">
            <header
                class="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-gray-200 bg-white px-8">
                <div>
                    <h1 class="lg:text-xl text-sm font-semibold">News Management</h1>
                    <p class="text-sm text-gray-500">Create and manage school publications</p>
                </div>
                <button
                    class="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700">
                    <Plus class="size-4" />
                    Create News
                </button>
            </header>
            <main class="p-8">
                <div class="grid gap-4 md:grid-cols-3">
                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Total News</p>
                        <h2 class="mt-2 text-3xl font-bold">124</h2>
                    </div>
                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Published</p>
                        <h2 class="mt-2 flex items-center gap-2 text-3xl font-bold">
                            98
                            <CheckCircle2 class="size-6 text-gray-500" />
                        </h2>
                    </div>
                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Draft</p>
                        <h2 class="mt-2 flex items-center gap-2 text-3xl font-bold">
                            26
                            <Clock class="size-6 text-gray-500" />
                        </h2>
                    </div>
                </div>
                <section class="mt-6 rounded-xl border border-gray-200 bg-white p-5">
                    <div class="flex gap-4">
                        <div class="relative flex-1">
                            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                            <input v-model="search" placeholder="Search news..."
                                class="w-full rounded-lg focus:ring-3 ring-gray-200 transition duration-200 border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-400" />
                        </div>
                        <select v-model="category" class="rounded-lg border border-gray-200 px-4 text-sm outline-none">
                            <option v-for="item in categories" :key="item">
                                {{ item }}
                            </option>
                        </select>
                    </div>
                </section>
                <section class="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                    <table class="w-full">
                        <thead class="border-b border-gray-200 bg-gray-50 text-sm text-gray-500">
                            <tr>
                                <th class="px-6 py-4 text-left">Article</th>
                                <th class="px-6 py-4 text-left">Category</th>
                                <th class="px-6 py-4 text-left">Status</th>
                                <th class="px-6 py-4 text-left">Published</th>
                                <th class="px-6 py-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in news" :key="item.id"
                                class="border-b border-gray-200 transition hover:bg-gray-50">
                                <td class="px-6 py-4">
                                    <div class="flex gap-4">
                                        <img :src="item.image" class="size-16 rounded-lg object-cover" />
                                        <div>
                                            <h3 class="font-medium">{{ item.title }}</h3>
                                            <p class="mt-1 line-clamp-1 text-sm text-gray-500">
                                                {{ item.excerpt }}
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
                                    <span class="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                        {{ item.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{ item.date }}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex justify-end gap-1">
                                        <button class="rounded-md p-2 text-gray-600 hover:bg-gray-100" title="View">
                                            <Eye class="size-4" />
                                        </button>
                                        <button class="rounded-md p-2 text-gray-600 hover:bg-gray-100" title="Edit">
                                            <Pencil class="size-4" />
                                        </button>
                                        <button class="rounded-md p-2 text-red-500 hover:bg-red-50" title="Delete">
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