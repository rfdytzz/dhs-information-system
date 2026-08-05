<script setup lang="ts">
import { ArrowLeft, Upload, CalendarDays } from "@lucide/vue"
import { ref } from "vue"
import AdminSidebar from "@/components/layout/AdminSidebar.vue"

const form = ref({
    title: "",
    slug: "",
    category: "",
    status: "Draft",
    publish_date: "",
    excerpt: "",
    content: "",
    meta_title: "",
    meta_description: "",
    keywords: ""
})

const categories = [
    "Achievement",
    "Announcement",
    "Event",
    "School",
    "Academic"
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
        <AdminSidebar />
        <div class="ml-72">
            <header
                class="sticky top-0 z-10 flex h-18 items-center justify-between border-b border-gray-200 bg-white px-8">
                <div>
                    <h1 class="text-xl font-semibold">Create News</h1>
                    <p class="text-sm text-gray-500">Create a new article for the school website.</p>
                </div>
                <div class="flex gap-3">
                    <button class="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">Save
                        Draft</button>
                    <button
                        class="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700">Publish</button>
                </div>
            </header>

            <main class="p-8">
                <div class="mb-6">
                    <router-link to="/admin/news"
                        class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                        <ArrowLeft class="size-4" />
                        Back to News
                    </router-link>
                </div>

                <div class="grid gap-6 lg:grid-cols-3">
                    <div class="space-y-6 lg:col-span-2">
                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Basic Information</h2>
                            <div class="mt-5 space-y-5">
                                <div>
                                    <label class="mb-2 block text-sm font-medium">Title</label>
                                    <input v-model="form.title" @input="generateSlug" type="text"
                                        placeholder="Enter news title..."
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400" />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Slug</label>
                                    <input v-model="form.slug" type="text"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400" />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Short Description</label>
                                    <textarea v-model="form.excerpt" rows="4" placeholder="Short summary..."
                                        class="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"></textarea>
                                </div>
                            </div>
                        </section>

                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Content</h2>
                            <div class="mt-5">
                                <textarea v-model="form.content" rows="16" placeholder="Write your article here..."
                                    class="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"></textarea>
                            </div>
                        </section>

                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">SEO</h2>
                            <div class="mt-5 space-y-5">
                                <div>
                                    <label class="mb-2 block text-sm font-medium">Meta Title</label>
                                    <input v-model="form.meta_title" type="text"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400" />
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Meta Description</label>
                                    <textarea v-model="form.meta_description" rows="4"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-gray-400"></textarea>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Keywords</label>
                                    <input v-model="form.keywords" type="text"
                                        placeholder="school, competition, education"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="space-y-6">
                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Publish</h2>
                            <div class="mt-5 space-y-5">
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
                                        <option>Draft</option>
                                        <option>Published</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">Publish Date</label>
                                    <div class="relative">
                                        <CalendarDays
                                            class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                                        <input v-model="form.publish_date" type="date"
                                            class="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 outline-none" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Thumbnail</h2>
                            <label
                                class="mt-5 flex h-60 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition hover:bg-gray-50">
                                <Upload class="size-8 text-gray-400" />
                                <p class="mt-4 text-sm font-medium">Upload Thumbnail</p>
                                <p class="mt-1 text-xs text-gray-500">PNG, JPG or WEBP</p>
                                <input type="file" class="hidden" />
                            </label>
                        </section>

                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <button class="w-full rounded-lg bg-gray-900 py-3 font-medium text-white hover:bg-gray-700">
                                Publish News
                            </button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>