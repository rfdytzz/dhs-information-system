<script setup lang="ts">
import AdminSidebar from "@/components/layout/AdminSidebar.vue"
import { ArrowLeft, CalendarDays, MapPin, Upload, Users } from "@lucide/vue"
import { ref } from "vue"

const form = ref({
    title: "",
    slug: "",
    category: "",
    status: "Upcoming",
    location: "",
    organizer: "",
    startDate: "",
    endDate: "",
    maxParticipants: "",
    description: ""
})

const categories = [
    "Competition",
    "Seminar",
    "Workshop",
    "Sports",
    "School"
]

const generateSlug = () => {
    form.value.slug = form.value.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
}
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
                    <h1 class="text-xl font-semibold">Create Event</h1>
                    <p class="text-sm text-gray-500">Create and publish a new school event.</p>
                </div>

                <div class="flex gap-3">
                    <button class="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
                        Save Draft
                    </button>

                    <button class="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700">
                        Publish Event
                    </button>
                </div>
            </header>

            <main class="p-8">
                <router-link to="/admin/events"
                    class="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                    <ArrowLeft class="size-4" />
                    Back to Events
                </router-link>

                <div class="grid gap-6 lg:grid-cols-3">
                    <div class="space-y-6 lg:col-span-2">
                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Event Information</h2>

                            <div class="mt-6 space-y-5">
                                <div>
                                    <label class="mb-2 block text-sm font-medium">Event Title</label>
                                    <input v-model="form.title" @input="generateSlug" type="text"
                                        placeholder="Enter event title..."
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400" />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Slug</label>
                                    <input v-model="form.slug" type="text"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400" />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Description</label>
                                    <textarea v-model="form.description" rows="8"
                                        placeholder="Write event description..."
                                        class="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"></textarea>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="space-y-6">
                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Publish</h2>

                            <div class="mt-6 space-y-5">
                                <div>
                                    <label class="mb-2 block text-sm font-medium">Category</label>
                                    <select v-model="form.category"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none">
                                        <option value="">Select category</option>
                                        <option v-for="item in categories" :key="item">
                                            {{ item }}
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Status</label>
                                    <select v-model="form.status"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none">
                                        <option>Upcoming</option>
                                        <option>Ongoing</option>
                                        <option>Completed</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Location</label>
                                    <div class="relative">
                                        <MapPin class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                                        <input v-model="form.location" type="text" placeholder="Main Hall"
                                            class="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 outline-none" />
                                    </div>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Organizer</label>
                                    <input v-model="form.organizer" type="text" placeholder="Student Council"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none" />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Start Date</label>
                                    <div class="relative">
                                        <CalendarDays
                                            class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                                        <input v-model="form.startDate" type="datetime-local"
                                            class="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 outline-none" />
                                    </div>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">End Date</label>
                                    <div class="relative">
                                        <CalendarDays
                                            class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                                        <input v-model="form.endDate" type="datetime-local"
                                            class="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 outline-none" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Thumbnail</h2>

                            <label
                                class="mt-5 flex h-52 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition hover:bg-gray-50">
                                <Upload class="size-8 text-gray-400" />
                                <p class="mt-3 text-sm font-medium">Upload Thumbnail</p>
                                <p class="mt-1 text-xs text-gray-500">PNG, JPG, WEBP</p>
                                <input type="file" class="hidden" />
                            </label>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>