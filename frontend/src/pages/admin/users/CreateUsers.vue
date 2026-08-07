<script setup lang="ts">
import AdminSidebar from "@/components/layout/AdminSidebar.vue"
import { ArrowLeft, Upload } from "@lucide/vue"
import { ref, watch } from "vue"

const form = ref({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "User",
    writer: false,
    active: true
})

const roles = [
    "Admin",
    "User"
]

const defaultPassword = () => {
    form.value.password = 'dhsis2026'
    form.value.confirmPassword = 'dhsis2026'
}

const isShow = ref(false)
const togglePassword = () => {
    isShow.value = !isShow.value
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
                    <h1 class="text-xl font-semibold">Create User</h1>
                    <p class="text-sm text-gray-500">Create a new administrator or staff account.</p>
                </div>

                <div class="flex gap-3">
                    <button class="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-gray-100">
                        Cancel
                    </button>

                    <button class="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
                        Create User
                    </button>
                </div>
            </header>

            <main class="p-8">
                <router-link to="/admin/users"
                    class="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                    <ArrowLeft class="size-4" />
                    Back to Users
                </router-link>

                <div class="grid gap-6 lg:grid-cols-3">
                    <div class="space-y-6 lg:col-span-2">
                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">User Information</h2>

                            <div class="mt-6 grid gap-5 md:grid-cols-2">
                                <div class="md:col-span-2">
                                    <label class="mb-2 block text-sm font-medium">
                                        Full Name
                                    </label>

                                    <input v-model="form.name" type="text" placeholder="John Doe"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none transition duration-100 focus:ring-3 ring-gray-200 focus:border-gray-400">
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">
                                        Email
                                    </label>

                                    <input v-model="form.email" type="email" placeholder="john@example.com"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400 transition duration-100 focus:ring-3 ring-gray-200">
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">
                                        Phone Number
                                    </label>

                                    <input v-model="form.phone" type="text" placeholder="+62 812 xxxx xxxx"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400 transition duration-100 focus:ring-3 ring-gray-200">
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">
                                        Password
                                    </label>

                                    <input v-model="form.password" :type="isShow ? 'text' : 'password'"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400 transition duration-100 focus:ring-3 ring-gray-200">
                                </div>

                                <div>
                                    <label class="mb-2 block text-sm font-medium">
                                        Confirm Password
                                    </label>

                                    <input v-model="form.confirmPassword" :type="isShow ? 'text' : 'password'"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-gray-400 transition duration-100 focus:ring-3 ring-gray-200">
                                </div>
                                <div class="flex items-center gap-2">
                                    <input @click="togglePassword" type="checkbox" class="size-4" id="togglePassword">
                                    <label for="togglePassword" class="text-sm text-gray-500 mt-0.5">Show
                                        Password</label>
                                </div>
                                <div class="flex items-center gap-2 justify-end">
                                    <label @click="defaultPassword" for="defaultPassword" class="text-sm cursor-pointer text-gray-500 mt-0.5">Default
                                        Password</label>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div class="space-y-6">
                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Permissions</h2>

                            <div class="mt-6 space-y-5">
                                <div>
                                    <label class="mb-2 block text-sm font-medium">
                                        Role
                                    </label>

                                    <select v-model="form.role"
                                        class="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none">
                                        <option v-for="role in roles" :key="role">
                                            {{ role }}
                                        </option>
                                    </select>
                                </div>

                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-medium">
                                            Writer Access
                                        </p>

                                        <p class="text-sm text-gray-500">
                                            Allow creating and editing content.
                                        </p>
                                    </div>

                                    <input v-model="form.writer" type="checkbox" class="size-5">
                                </div>

                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-medium">
                                            Active Account
                                        </p>

                                        <p class="text-sm text-gray-500">
                                            User can sign in.
                                        </p>
                                    </div>

                                    <input v-model="form.active" type="checkbox" class="size-5">
                                </div>
                            </div>
                        </section>

                        <section class="rounded-xl border border-gray-200 bg-white p-6">
                            <h2 class="font-semibold">Profile Photo</h2>
                            <label
                                class="mt-5 flex h-52 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 transition hover:bg-gray-50">
                                <Upload class="size-8 text-gray-400" />
                                <p class="mt-3 text-sm font-medium">
                                    Upload Photo
                                </p>
                                <p class="mt-1 text-xs text-gray-500">
                                    PNG, JPG, WEBP
                                </p>
                                <input type="file" class="hidden">
                            </label>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>