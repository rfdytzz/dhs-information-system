<script setup lang="ts">
import AdminSidebar from "@/components/layout/AdminSidebar.vue"
import EditUsers from "@/components/ui/modal/EditUsers.vue"
import { Search, Plus, Eye, Pencil, Trash2, KeyRound, ShieldCheck, Users, UserCheck, UserX } from "@lucide/vue"
import { ref } from "vue"

const openEdit = ref(false)

const search = ref("")
const role = ref("All")

const roles = [
    "All",
    "Administrator",
    "Editor",
    "Staff"
]

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@dhs.sch.id",
        role: "Administrator",
        writter: true,
        status: "Active",
        lastLogin: "Today, 08:45",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah@dhs.sch.id",
        role: "Teacher",
        writter: true,
        status: "Active",
        lastLogin: "Yesterday",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        name: "Michael Lee",
        email: "michael@dhs.sch.id",
        role: "Student",
        writter: false,
        status: "Active",
        lastLogin: "3 days ago",
        avatar: "https://i.pravatar.cc/150?img=12"
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
                    <h1 class="text-xl font-semibold">User Management</h1>
                    <p class="text-sm text-gray-500">Manage administrator and staff accounts</p>
                </div>

                <router-link to="/admin/users/add"
                    class="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
                    <Plus class="size-4" />
                    Create User
                </router-link>
            </header>

            <main class="p-8">
                <div class="grid gap-4 md:grid-cols-4">
                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Total Users</p>
                        <div class="mt-3 flex items-center justify-between">
                            <h2 class="text-3xl font-bold">24</h2>
                            <Users class="size-7 text-gray-400" />
                        </div>
                    </div>

                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Administrators</p>
                        <div class="mt-3 flex items-center justify-between">
                            <h2 class="text-3xl font-bold">4</h2>
                            <ShieldCheck class="size-7 text-gray-400" />
                        </div>
                    </div>

                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Active</p>
                        <div class="mt-3 flex items-center justify-between">
                            <h2 class="text-3xl font-bold">20</h2>
                            <UserCheck class="size-7 text-gray-400" />
                        </div>
                    </div>

                    <div class="rounded-xl border border-gray-200 bg-white p-5">
                        <p class="text-sm text-gray-500">Inactive</p>
                        <div class="mt-3 flex items-center justify-between">
                            <h2 class="text-3xl font-bold">4</h2>
                            <UserX class="size-7 text-gray-400" />
                        </div>
                    </div>
                </div>

                <section class="mt-6 rounded-xl border border-gray-200 bg-white p-5">
                    <div class="flex gap-4">
                        <div class="relative flex-1">
                            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                            <input v-model="search" placeholder="Search user..."
                                class="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none focus:border-gray-400" />
                        </div>

                        <select v-model="role" class="rounded-lg border border-gray-200 px-4 text-sm outline-none">
                            <option v-for="item in roles" :key="item">
                                {{ item }}
                            </option>
                        </select>
                    </div>
                </section>

                <section class="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
                    <table class="min-w-250 w-full">
                        <thead class="border-b border-gray-200 bg-gray-50 text-sm text-gray-500">
                            <tr>
                                <th class="px-6 py-4 text-left">User</th>
                                <th class="px-6 py-4 text-left">Role</th>
                                <th class="px-6 py-4 text-left">Status</th>
                                <th class="px-6 py-4 text-left">Last Login</th>
                                <th class="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="user in users" :key="user.id" class="border-b border-gray-200 hover:bg-gray-50">
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-4">
                                        <img :src="user.avatar" class="size-12 rounded-full object-cover" />
                                        <div>
                                            <h3 class="font-medium flex items-center gap-1">
                                                {{ user.name }}
                                                <span v-if="user.writter"
                                                    class="rounded-full bg-gray-200 text-gray-600 px-1 text-[10px]">
                                                    Writer
                                                </span>
                                            </h3>
                                            <p class="text-sm text-gray-500">
                                                {{ user.email }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                        {{ user.role }}
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    <span :class="user.status === 'Active'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'" class="rounded-full px-3 py-1 text-xs">
                                        {{ user.status }}
                                    </span>
                                </td>

                                <td class="px-6 py-4 text-sm text-gray-500">
                                    {{ user.lastLogin }}
                                </td>

                                <td class="px-6 py-4">
                                    <div class="flex justify-end gap-1">
                                        <button class="rounded-md p-2 hover:bg-gray-100">
                                            <Eye class="size-4" />
                                        </button>

                                        <button @click="openEdit = true" class="rounded-md p-2 hover:bg-gray-100">
                                            <Pencil class="size-4" />
                                        </button>

                                        <button class="rounded-md p-2 hover:bg-gray-100">
                                            <KeyRound class="size-4" />
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

    <EditUsers :open="openEdit" @close="openEdit = false" @save="openEdit = false" />
</template>